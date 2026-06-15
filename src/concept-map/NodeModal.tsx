import { useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import type { ConceptNodeData } from './types';
import { TYPE_STYLES } from './palette';

interface NodeModalProps {
  node: ConceptNodeData | null;
  onClose: () => void;
}

/**
 * Usa <dialog> nativo: focus trap, chiusura con Esc e ripristino del focus
 * sono gestiti dal browser.
 */
export function NodeModal({ node, onClose }: NodeModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (node && !dialog.open) dialog.showModal();
    if (!node && dialog.open) dialog.close();
  }, [node]);

  if (!node) return null;
  const style = TYPE_STYLES[node.type];

  return (
    <dialog
      ref={ref}
      className="cm-modal"
      aria-labelledby="cm-modal-title"
      onClose={onClose}
      onClick={(e) => {
        // click sul backdrop = click sull'elemento dialog stesso
        if (e.target === ref.current) onClose();
      }}
      style={{ ['--cm-type-color' as string]: style.color, ['--cm-type-tint' as string]: style.tint }}
    >
      <div className="cm-modal__body">
        <header className="cm-modal__header">
          <span className="cm-modal__avatar" aria-hidden="true">
            {node.imageUrl ? (
              <img
                src={node.imageUrl}
                alt=""
                onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).dataset.failed = 'true';
                }}
              />
            ) : null}
            <span className="cm-modal__initial">{node.title.charAt(0).toUpperCase()}</span>
          </span>
          <div className="cm-modal__heading">
            <span className="cm-modal__badge">{style.label}</span>
            <h2 id="cm-modal-title">{node.title}</h2>
          </div>
          <button type="button" className="cm-modal__close" onClick={onClose} aria-label="Chiudi la scheda">
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        {node.description ? (
          <div className="cm-modal__description">
            <Markdown>{node.description}</Markdown>
          </div>
        ) : (
          <p className="cm-modal__empty">Nessuna descrizione disponibile per questo elemento.</p>
        )}

        {node.sources && node.sources.length > 0 && (
          <section className="cm-modal__sources" aria-label="Fonti">
            <h3>Fonti</h3>
            <ul>
              {node.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                    <span className="cm-modal__ext" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </dialog>
  );
}
