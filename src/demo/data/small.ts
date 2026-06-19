import { buildMap } from './builder';

const avatar = (n: number) => `https://i.pravatar.cc/96?img=${n}`;
const photo = (seed: string) => `https://picsum.photos/seed/${seed}/96/96`;

/**
 * "Il caso Porto Vecchio" — inchiesta fittizia, ~15 nodi su 2 livelli.
 */
export const smallMap = buildMap(
  {
    id: 'root',
    title: 'Il caso Porto Vecchio',
    type: 'event',
    imageUrl: photo('porto'),
    description:
      'Inchiesta sulla riqualificazione dell\'area portuale di **Porto Vecchio**: appalti, varianti urbanistiche e una rete di rapporti tra amministrazione, imprese e finanziatori.\n\nLa mappa ricostruisce i principali attori emersi dagli articoli pubblicati tra il 2024 e il 2026.',
    sources: [
      { title: 'Porto Vecchio, tutte le tappe dell\'inchiesta', url: 'https://example.com/archivio/porto-vecchio' },
      { title: 'La timeline interattiva', url: 'https://example.com/archivio/porto-vecchio/timeline' },
    ],
    children: [
      {
        id: 'rinaldi',
        title: 'Marta Rinaldi',
        type: 'person',
        relation: 'sindaca',
        imageUrl: avatar(47),
        description:
          'Sindaca della città dal 2021. Ha firmato la **variante urbanistica** che ha reso edificabile l\'area del molo nord.',
        sources: [{ title: 'Chi è Marta Rinaldi', url: 'https://example.com/archivio/rinaldi' }],
        children: [
          {
            id: 'gabinetto',
            title: 'Ufficio di gabinetto',
            type: 'organization',
            relation: 'guida',
            imageUrl: photo('gabinetto'),
            description: 'La struttura che ha gestito i rapporti con i proponenti del progetto.',
          },
          {
            id: 'campagna',
            title: 'Campagna elettorale 2021',
            type: 'event',
            relation: 'finanziata durante',
            imageUrl: photo('campagna'),
            description:
              'I registri dei finanziamenti mostrano **120.000 €** di contributi da società poi coinvolte nell\'appalto.',
            sources: [{ title: 'I finanziatori della campagna', url: 'https://example.com/archivio/finanziamenti-2021' }],
          },
        ],
      },
      {
        id: 'edilport',
        title: 'EdilPort S.p.A.',
        type: 'organization',
        relation: 'appaltatrice',
        imageUrl: photo('edilport'),
        description: 'Capofila del consorzio vincitore. Fatturato triplicato tra il 2022 e il 2025.',
        sources: [{ title: 'EdilPort, l\'ascesa di un colosso locale', url: 'https://example.com/archivio/edilport' }],
        children: [
          {
            id: 'greco',
            title: 'Stefano Greco',
            type: 'person',
            relation: 'amministratore',
            imageUrl: avatar(12),
            description: 'Amministratore delegato di EdilPort, già dirigente comunale fino al 2019.',
          },
          {
            id: 'holding',
            title: 'PV Holding Ltd',
            type: 'organization',
            relation: 'controllata da',
            // immagine volutamente rotta: testa il fallback
            imageUrl: 'https://example.invalid/holding.png',
            description: 'Holding con sede a **Malta**, proprietaria del 60% di EdilPort.',
          },
        ],
      },
      {
        id: 'gara',
        title: 'Gara d\'appalto 2023',
        type: 'event',
        relation: 'al centro di',
        imageUrl: photo('gara'),
        description:
          'Bando da **240 milioni di euro** aggiudicato con un solo concorrente ammesso.\n\n- 4 esclusioni per vizi formali\n- ricorso al TAR respinto\n- proroga dei termini concessa due volte',
        sources: [
          { title: 'Una gara con un solo concorrente', url: 'https://example.com/archivio/gara-2023' },
        ],
        children: [
          {
            id: 'commissione',
            title: 'Commissione di gara',
            type: 'organization',
            relation: 'giudicata da',
            imageUrl: photo('commissione'),
            description: 'Tre membri, due dei quali nominati dall\'ufficio di gabinetto.',
          },
        ],
      },
      {
        id: 'procura',
        title: 'Procura della Repubblica',
        type: 'organization',
        relation: 'indaga',
        imageUrl: photo('procura'),
        description: 'Ha aperto un fascicolo per turbativa d\'asta a marzo 2026.',
        sources: [{ title: 'La Procura apre un fascicolo', url: 'https://example.com/archivio/fascicolo' }],
      },
      {
        id: 'esposto',
        title: 'L\'esposto anonimo',
        type: 'topic',
        relation: 'origine dell\'inchiesta',
        description: 'Il documento di 12 pagine recapitato in redazione nel novembre 2025.',
      },
    ],
  },
  [
    { source: 'greco', target: 'campagna', label: 'ha finanziato' },
    { source: 'commissione', target: 'gabinetto', label: 'nominata da' },
  ],
);
