# Multi-expand opzionale dei sotto-alberi — Design

**Data:** 2026-06-23
**Componente:** `ConceptMapViewer` (`src/concept-map/`)
**Stato:** approvato dall'utente, in attesa di review

## Obiettivo

Rendere **opzionale** la chiusura automatica dei sotto-alberi fratelli all'apertura
di un sotto-albero. Oggi il componente si comporta sempre come un accordion: aprire
un nodo collassa tutti gli altri rami, lasciando aperta una sola catena radice→nodo.
Vogliamo poter abilitare una modalità **multi-expand libero** in cui più rami
restano aperti contemporaneamente, controllata da un prop.

## Decisioni (dal brainstorming)

1. **Comportamento a chiusura disattivata:** multi-expand libero. Ogni nodo si
   apre/chiude in modo indipendente; possono restare aperti quanti rami si vuole.
   Aprire un nodo apre solo lui (più i suoi antenati, se non già aperti), senza
   toccare gli altri rami.
2. **Default retrocompatibile:** il prop attiva esplicitamente o disattiva
   l'accordion. Default = accordion attivo, così i consumer esistenti non cambiano
   comportamento.
3. **fitView invariato:** dopo un'espansione la vista zooma sul nodo appena aperto
   + i suoi figli; dopo un collasso fa fit su tutto il grafo visibile. Identico
   alle due modalità.
4. **Collasso = "pulizia":** chiudendo un nodo si azzera anche l'espansione di
   tutti i suoi discendenti. Riaprendolo mostra solo i figli diretti, tutto il
   resto chiuso. (Nessuno stato "fantasma" preservato.)

## API pubblica

Nuovo prop in `ConceptMapViewerProps` (`ConceptMapViewer.tsx`):

```ts
export interface ConceptMapViewerProps {
  map: ConceptMapData;
  /**
   * Se true (default) apre un solo ramo per livello (accordion):
   * aprire un nodo collassa gli altri rami.
   * Se false, più rami restano aperti contemporaneamente (multi-expand).
   */
  autoCollapseSiblings?: boolean;
}
```

Default `true` → comportamento attuale invariato. Il default va applicato
**destrutturando il prop** nel componente interno, così che `onToggle` legga un
valore booleano definito anche quando il consumer omette il prop:

```ts
function Viewer({ map, autoCollapseSiblings = true }: ConceptMapViewerProps) {
```

Senza il default in destrutturazione il valore sarebbe `undefined` (falsy) e
l'accordion di default si romperebbe silenziosamente.

## Modello di stato

Si sostituisce lo stato a catena con un insieme di id espansi:

```ts
// prima
const [expandedChain, setExpandedChain] = useState<string[]>([]);
// dopo
const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
```

**Invariante:** `expandedIds` contiene solo nodi i cui antenati sono tutti nel set
(è sempre un sotto-albero radicato nella radice). La radice è sempre implicitamente
espansa e non compare nel set. L'invariante è garantita da:
- in **espansione**, l'uso di `chainTo` (che include l'intera catena di antenati);
- in **collasso**, la rimozione del nodo insieme a tutti i suoi discendenti.

Questo modello unificato copre entrambe le modalità: l'unica differenza è il ramo
di espansione di `onToggle`.

## Logica in `graph.ts`

### `computeVisible` — cambio firma

Da `(index, expandedChain: string[])` a `(index, expandedIds: Set<string>)`.
Calcola i nodi visibili con una BFS dalla radice; per ogni nodo visibile che è
espanso (o la radice) aggiunge i figli. La BFS garantisce l'ordine dei `nodes`
coerente col tab-order, indipendentemente dall'ordine di inserimento nel set.

```ts
export function computeVisible(index: GraphIndex, expandedIds: Set<string>): VisibleGraph {
  const visibleIds = new Set<string>([index.root.id]);
  const nodes: ConceptNodeData[] = [index.root];
  const queue: ConceptNodeData[] = [index.root];
  while (queue.length) {
    const parent = queue.shift()!;
    if (parent.id !== index.root.id && !expandedIds.has(parent.id)) continue;
    for (const childId of parent.childrenIds) {
      const child = index.byId.get(childId);
      if (!child || visibleIds.has(childId)) continue;
      visibleIds.add(childId);
      nodes.push(child);
      queue.push(child);
    }
  }

  const visibleCrossLinks = index.crossLinks.filter(
    (e) => visibleIds.has(e.source) && visibleIds.has(e.target),
  );

  return { nodes, visibleIds, expandedIds, visibleCrossLinks };
}
```

Il campo `expandedIds` del `VisibleGraph` restituito è il set passato (per
invariante tutti i suoi membri sono visibili).

### Nuovo helper `collectDescendants`

```ts
/** Tutti i discendenti di `id` (escluso `id`), lungo childrenIds. */
export function collectDescendants(index: GraphIndex, id: string): string[]
```

Usato dal collasso per la "pulizia". `chainTo` resta invariato e viene riusato per
l'espansione.

## Logica in `ConceptMapViewer.tsx`

### `onToggle`

```ts
const onToggle = useCallback(
  (id: string) => {
    setExpandedIds((prev) => {
      if (prev.has(id)) {
        // COLLASSO (identico nelle due modalità): rimuovi id + discendenti
        const next = new Set(prev);
        next.delete(id);
        for (const d of collectDescendants(index, id)) next.delete(d);
        lastAction.current = { id, type: 'collapse' };
        return next;
      }
      // ESPANSIONE
      const chain = chainTo(index, id);
      lastAction.current = { id, type: 'expand' };
      if (autoCollapseSiblings) return new Set(chain);   // accordion: sostituisce
      return new Set([...prev, ...chain]);               // multi-expand: unione
    });
  },
  [index, autoCollapseSiblings],
);
```

### fitView

Il diff di catena (`prevChain`) non è più applicabile. Si rileva l'ultima azione
con un ref aggiornato dentro `onToggle`:

```ts
const lastAction = useRef<{ id: string; type: 'expand' | 'collapse' } | null>(null);
```

L'effect (dipendenza `expandedIds`) legge `lastAction.current`:
- `expand` → `fitView` sul nodo `id` + i suoi figli (come oggi);
- `collapse` (o `null`) → `fitView` su tutto il grafo visibile.

Rispetto di `prefers-reduced-motion` invariato.

### Reset on map change

`setExpandedIds(new Set())` (più reset di `selectedId`). **Importante:** l'effect di
reset deve anche azzerare `lastAction.current = null`. Il reset di `expandedIds`
ri-attiva l'effect di fitView (che dipende da `expandedIds`); se `lastAction`
restasse a un `{ type: 'expand', id }` della mappa precedente, il fitView punterebbe
a un nodo di un'altra mappa. Azzerandolo a `null` si forza il fit su tutto il grafo,
replicando la guardia `expandedChain.length > 0` dell'implementazione attuale.

## Componenti non toccati

- `ConceptNode.tsx`: `isExpanded` continua a derivare da
  `visible.expandedIds.has(n.id)`.
- `layout.ts`, `NodeModal.tsx`, `palette.ts`, `concept-map.css`: nessuna modifica.

## Demo (`src/demo/`)

Aggiunta di un controllo per provare la modalità:

- stato `const [autoCollapse, setAutoCollapse] = useState(true);` in `App.tsx`;
- un toggle nell'header: `<label className="demo__toggle"><input type="checkbox" ...> Chiudi rami fratelli</label>`;
- passaggio del prop: `<ConceptMapViewer map={map} autoCollapseSiblings={autoCollapse} />`;
- regola CSS in `app.css` per allineare il toggle (coerente col picker esistente).

## Verifica

Nessuna test suite nel progetto: l'unico gate automatico è `npm run build`
(`tsc -b` + vite build), da eseguire a fine implementazione.

Verifica manuale nel demo:
- toggle **off** (multi-expand): aprire più rami a livelli diversi e verificare che
  restino tutti aperti;
- toggle **on** (accordion): comportamento attuale invariato (un solo ramo aperto);
- collasso di un nodo con discendenti espansi → discendenti azzerati (riaprendo
  mostra solo i figli diretti);
- fitView coerente in entrambe le modalità (zoom sul nodo aperto, fit su collasso);
- cambio mappa → stato resettato.

## Note di scope (YAGNI)

- Nessun cambio runtime "intelligente" alla commutazione del prop: se il prop passa
  da `false` a `true` mentre più rami sono aperti, lo stato resta finché l'utente
  non interagisce (l'accordion si ripristina al primo toggle). Comportamento
  accettabile per il PoC; non si aggiunge logica di riconciliazione.
- Nessuna persistenza dello stato di espansione.
