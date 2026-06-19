# Mappa concettuale — PoC

Componente React per la visualizzazione **readonly** di mappe concettuali ad albero radiale, con cross-link, modale di dettaglio e demo app per il test.

Stack: **React 19 · TypeScript · Vite · @xyflow/react 12 · d3-hierarchy · react-markdown**.

## Avvio

```bash
npm install
npm run dev      # demo su http://localhost:5173
npm run build    # type-check + bundle di produzione
```

## Struttura

```
src/
  concept-map/            ← il componente (autocontenuto, importabile)
    index.ts              ← export pubblici
    types.ts              ← contratto dati (vedi sotto)
    graph.ts              ← indicizzazione, validazione, visibilità accordion
    layout.ts             ← layout radiale (d3-hierarchy)
    ConceptMapViewer.tsx  ← componente principale
    ConceptNode.tsx       ← nodo custom (scheda + toggle +/−)
    NodeModal.tsx         ← modale di dettaglio (<dialog> nativo)
    palette.ts            ← colori dei 4 tipi di nodo
    concept-map.css
  demo/                   ← app di test (selettore con 3 mappe d'esempio)
```

Uso del componente:

```tsx
import { ConceptMapViewer } from './concept-map';
<ConceptMapViewer map={data} />   // il contenitore deve avere un'altezza
```

## Contratto dati

```ts
interface ConceptMapData {
  rootId: string;
  nodes: {
    id: string;
    title: string;
    type: 'person' | 'event' | 'organization' | 'location' | 'topic';
    parentId: string | null;     // null solo per la radice
    childrenIds: string[];
    imageUrl?: string;           // fallback automatico se mancante/rotta
    description?: string;        // markdown
    sources?: { title: string; url: string }[];
  }[];
  edges: { id: string; source: string; target: string; label?: string }[];
}
```

La gerarchia è definita da `parentId`/`childrenIds`. Gli archi in `edges` che
coincidono con una relazione parent→figlio forniscono la **label del ramo**;
tutti gli altri sono **cross-link** (resi tratteggiati in rosso, visibili solo
quando entrambi gli estremi sono sullo schermo). Dati incoerenti (id duplicati,
figli inesistenti, nodi irraggiungibili) vengono ignorati con warning in console.

## Comportamento

- All'apertura: radice al centro + figli di livello 1 disposti radialmente.
- **Espansione accordion**: il "+" apre un sottoalbero e collassa i rami
  fratelli a ogni livello (lo stato è una catena radice→nodo); il "+" diventa
  "−" per richiudere. Dopo ogni espansione, `fitView` animato centra il
  sottoalbero aperto.
- Click sul corpo del nodo → modale con immagine, badge tipo, descrizione
  markdown e fonti (aperte in nuova scheda).
- Pan/zoom liberi (mouse e touch), controlli zoom, legenda dei tipi.

## Accessibilità e mobile

- Nodi e toggle sono veri `<button>` con `aria-label` descrittive e
  `aria-expanded`; tab-order in ordine BFS; focus visibile.
- Modale `<dialog>` nativa: focus trap, Esc e ripristino del focus gestiti
  dal browser; su mobile diventa bottom-sheet.
- Target touch ≥ 34–44 px, `prefers-reduced-motion` rispettato.

## Note e limiti del PoC

- Con l'accordion i nodi **renderizzati simultaneamente** restano pochi anche
  su mappe da 100 nodi: le prestazioni non sono un problema a questa scala.
- Il raggio di ogni anello si adatta al numero di nodi del livello per evitare
  sovrapposizioni.
- Non incluso (fuori scope PoC): editing, ricerca nel grafo, export immagine,
  virtualizzazione per mappe molto oltre i 100 nodi.
