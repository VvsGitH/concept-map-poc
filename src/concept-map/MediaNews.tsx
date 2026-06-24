import type { MediaFormat, MediaType } from "./types";

export interface MediaNewsProps {
  title: string;
  url: string;
  format: MediaFormat;
  /**
   * Obbligatorio semanticamente solo quando format === 'web'.
   * Ignorato per 'paper' e 'de'.
   */
  mediaType?: MediaType;
  bylineName?: string;
  /** Data ISO 8601, es. "2018-05-09" */
  publicationDate?: string;
}

const CHIP_CONFIG: Record<string, { label: string; icon: string }> = {
  paper: { label: 'Quotidiano', icon: '' },
  de: { label: 'Digital Edition', icon: '' },
  web: { label: 'Web', icon: '' },
  'web/text': { label: 'Web', icon: '' },
  'web/cards': { label: 'Web', icon: '' },
  'web/image': { label: 'Immagine', icon: '' },
  'web/video': { label: 'Video', icon: '' },
  'web/podcast': { label: 'Podcast', icon: '' }
};

const DATE_FMT = new Intl.DateTimeFormat('it-IT', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC'
});

export function MediaNews({
  title,
  url,
  format,
  mediaType,
  bylineName,
  publicationDate
}: MediaNewsProps) {
  const chipKey = format === 'web' && mediaType ? `web/${mediaType}` : format;
  const { label, icon } = CHIP_CONFIG[chipKey] ?? { label: '—', icon: '' };

  let formattedDate: string | undefined;
  if (publicationDate) {
    const d = new Date(publicationDate);
    formattedDate = isNaN(d.getTime()) ? publicationDate : DATE_FMT.format(d);
  }

  return (
    <article className="cm-media-news">
      <header className="cm-media-news__header">
        <span className="cm-media-news__chip">
          {icon && (
            <span className="cm-media-news__chip-icon" aria-hidden="true">
              {icon}
            </span>
          )}
          <span className="cm-media-news__chip-label">{label}</span>
        </span>
        <button
          type="button"
          className="cm-media-news__bookmark"
          aria-label="Salva nei preferiti"
        >
          <span aria-hidden="true">☆</span>
        </button>
      </header>

      <a
        href={url}
        className="cm-media-news__content"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="cm-media-news__title">{title}</p>
        {bylineName && <p className="cm-media-news__abstract">{bylineName}</p>}
      </a>

      {formattedDate && publicationDate && (
        <time className="cm-media-news__date" dateTime={publicationDate}>
          📅 {formattedDate}
        </time>
      )}
    </article>
  );
}
