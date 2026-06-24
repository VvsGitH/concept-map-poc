# MediaNews component — Design

**Data:** 2026-06-23
**Componente:** `MediaNews` (`src/concept-map/`)
**Stato:** approvato dall'utente, in attesa di review

## Obiettivo

Creare un componente standalone `MediaNews` che renderizzi una singola fonte
editoriale associata a un nodo della mappa concettuale, con metadati ricchi
(formato, tipo media, titolo, abstract, data). Il componente è indipendente
dalla modale — l'integrazione avverrà in una fase successiva.

Il tipo `SourceLink` esistente rimane invariato e verrà deprecato in una fase
futura, quando si migrerà al contratto dati reale del server.

## Contratto dati

### Nuovi tipi in `types.ts`

```ts
export type MediaFormat = 'web' | 'paper' | 'de';
export type MediaType = 'text' | 'image' | 'video' | 'podcast' | 'cards';

export interface MediaNewsItem {
  title: string;
  url: string;
  format: MediaFormat;
  /**
   * Obbligatorio semanticamente solo quando format === 'web'.
   * Ignorato per 'paper' e 'de'.
   */
  mediaType?: MediaType;
  abstract?: string;
  /** Data ISO 8601, es. "2018-05-09" */
  date?: string;
}
```

I tre tipi (`MediaFormat`, `MediaType`, `MediaNewsItem`) vengono aggiunti in coda
a `types.ts` (dove vivono tutti i tipi pubblici del package) ed esportati da
`index.ts` insieme ai tipi già presenti.

## Componente

### File

`src/concept-map/MediaNews.tsx`

### Props

```ts
interface MediaNewsProps {
  item: MediaNewsItem;
}
```

### Lookup table

```ts
const CHIP_CONFIG: Record<string, { label: string; icon: string }> = {
  'paper':       { label: 'Quotidiano',      icon: '' },
  'de':          { label: 'Digital Edition', icon: '' },
  'web':         { label: 'Web',             icon: '' }, // fallback per web senza mediaType
  'web/text':    { label: 'Web',             icon: '' },
  'web/cards':   { label: 'Web',             icon: '' },
  'web/image':   { label: 'Immagine',        icon: '' },
  'web/video':   { label: 'Video',           icon: '' },
  'web/podcast': { label: 'Podcast',         icon: '' },
};
```

La chiave di lookup è:
- `format` per `paper` e `de`
- `format/mediaType` per `web` quando `mediaType` è presente
- `'web'` come fallback quando `format === 'web'` e `mediaType` è assente

Nessuna chiave può essere `undefined`: se la chiave non è presente in `CHIP_CONFIG`
(caso impossibile con l'enum attuale), si usa `{ label: '—', icon: '' }` come guard
defensivo.

Il campo `icon` è intenzionalmente `''` per tutti i valori attuali (placeholder).
Quando saranno disponibili icone reali, ogni voce verrà aggiornata con il valore
corrispondente. Finché `icon` è stringa vuota, `{icon && <span>}` non monta nulla —
la condizione è coerente con il design futuro senza richiedere modifiche strutturali.

### Struttura JSX

```
<article class="cm-media-news">
  <header class="cm-media-news__header">
    <span class="cm-media-news__chip">
      {icon && <span class="cm-media-news__chip-icon" aria-hidden>…</span>}
      <span class="cm-media-news__chip-label">{label}</span>
    </span>
    <button
      type="button"
      class="cm-media-news__bookmark"
      aria-label="Salva nei preferiti"
    >
      <span aria-hidden>☆</span>
    </button>
  </header>

  <a
    href={url}
    class="cm-media-news__title"
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </a>

  {abstract && (
    <p class="cm-media-news__abstract">{abstract}</p>
  )}

  {date && (
    <time class="cm-media-news__date" dateTime={date}>
      📅 {formattedDate}
    </time>
  )}
</article>
```

### Formattazione data

```ts
const DATE_FMT = new Intl.DateTimeFormat('it-IT', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});
```

Produce "09 mag 2018". `timeZone: 'UTC'` è obbligatorio: una stringa ISO 8601
senza ora (es. `"2018-05-09"`) viene parsata come mezzanotte UTC da `new Date()`;
senza questa opzione il formatter userebbe il fuso locale del browser e in UTC+N
potrebbe mostrare il giorno precedente. L'oggetto viene creato una volta a livello
di modulo (costante, non ricreata a ogni render).

Guard per date malformate: prima di chiamare `DATE_FMT.format()` si verifica che
`new Date(date)` sia valida con `isNaN(d.getTime())`; in caso negativo si mostra
la stringa originale `date` senza formattazione, evitando `RangeError` a runtime.

```ts
const d = new Date(date);
const formattedDate = isNaN(d.getTime()) ? date : DATE_FMT.format(d);
```

## CSS

Nuove classi aggiunte in coda a `concept-map.css`, coerenti col tema
"inchiostro su carta".

| Classe | Note |
|--------|------|
| `.cm-media-news` | `display: flex; flex-direction: column; gap: 8px`; sfondo bianco; bordo `var(--cm-line, #e3dfd4)`; `border-radius: 12px`; padding interno |
| `.cm-media-news__header` | `display: flex; align-items: center; justify-content: space-between` |
| `.cm-media-news__chip` | pill con bordo `var(--cm-line)`; `font-size: 10.5px`; `font-weight: 600`; `letter-spacing: 0.06em`; colore neutro `var(--cm-ink-soft)`; icona + label in flex row |
| `.cm-media-news__bookmark` | 32×32px; `border-radius: 50%`; bordo `var(--cm-line)`; sfondo trasparente; cursore pointer; font-size 16px |
| `.cm-media-news__title` | `font-family: Newsreader`; `font-weight: 700`; `font-size: 16px`; colore `var(--cm-ink)`; nessun underline di default; underline su `:hover` |
| `.cm-media-news__abstract` | `font-size: 14px`; colore `var(--cm-ink-soft)`; `display: -webkit-box`; `-webkit-box-orient: vertical`; `-webkit-line-clamp: 3`; `overflow: hidden` — tutte e quattro le proprietà sono necessarie per il clamp |
| `.cm-media-news__date` | `font-size: 12px`; colore `var(--cm-ink-soft)` |

## Esportazioni

`index.ts` viene aggiornato per esportare:

```ts
export { MediaNews } from './MediaNews';
export type { MediaFormat, MediaType, MediaNewsItem } from './types';
```

### Nota: token CSS e contesto di rendering

Le variabili `--cm-ink`, `--cm-ink-soft`, `--cm-line` sono definite su `.cm-root`.
Poiché `MediaNews` fa parte della libreria `concept-map/` e verrà sempre usato
all'interno di un `ConceptMapViewer` (che monta `.cm-root`), non è necessario
definire i token sul componente stesso. Le dichiarazioni CSS useranno comunque
i fallback hardcoded (`var(--cm-ink, #23241f)` ecc.) per robustezza, seguendo
lo stesso pattern di `.cm-modal`.

### Nota: semantica del titolo

Il titolo dell'articolo è un `<a>` senza heading wrapper. In questa fase standalone
è accettabile: il componente non è ancora in un contesto lista. Quando verrà
integrato in `NodeModal` si valuterà se avvolgerlo in un `<h3>` o `<h4>`.

### Nota: `paper` vs `de` — distinzione visiva

`paper` ("Quotidiano") e `de` ("Digital Edition") hanno entrambi `icon: ''`
e si differenziano solo per la label testuale. Non è prevista distinzione visiva
tramite colore o forma della chip — è scelta intenzionale per questa fase.

## Decisioni escluse dal scope

- **Integrazione in `NodeModal`**: futura fase separata
- **Icone reali**: placeholder `<span>` per ora; verranno aggiunte quando
  si sceglierà la libreria icone
- **Azione bookmark**: `<button>` placeholder non collegato a nessun handler;
  la logica preferiti è fuori scope
- **Demo in `App.tsx`**: non richiesta; il componente è testabile importandolo
  direttamente
- **Migrazione `SourceLink` → `MediaNewsItem`**: futura fase separata
