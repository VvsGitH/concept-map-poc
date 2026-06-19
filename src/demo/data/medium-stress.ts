import { buildMap } from './builder';
import type { TreeDef } from './builder';
import type { ConceptNodeType } from '../../concept-map';

const avatar = (n: number) => `https://i.pravatar.cc/96?img=${n}`;
const photo = (seed: string) => `https://picsum.photos/seed/${seed}/96/96`;

/* ------------------------------------------------------------------ */
/* Dataset medio: "Dossier Appalti Sanità" — ~40 nodi, 4 livelli      */
/* ------------------------------------------------------------------ */

const person = (id: string, title: string, img: number, relation?: string, children?: TreeDef[]): TreeDef => ({
  id,
  title,
  type: 'person',
  relation,
  imageUrl: avatar(img),
  description: `Profilo di **${title}** ricostruito dagli articoli d'archivio.`,
  sources: [{ title: `Archivio: ${title}`, url: `https://example.com/archivio/${id}` }],
  children,
});

const org = (id: string, title: string, relation?: string, children?: TreeDef[]): TreeDef => ({
  id,
  title,
  type: 'organization',
  relation,
  imageUrl: photo(id),
  description: `Scheda dell'organizzazione **${title}**.`,
  sources: [{ title: `Archivio: ${title}`, url: `https://example.com/archivio/${id}` }],
  children,
});

const ev = (id: string, title: string, relation?: string, children?: TreeDef[]): TreeDef => ({
  id,
  title,
  type: 'event',
  relation,
  imageUrl: photo(id),
  description: `Cronologia e dettagli dell'evento **${title}**.`,
  children,
});

export const mediumMap = buildMap(
  {
    id: 'dossier',
    title: 'Dossier Appalti Sanità',
    type: 'topic',
    imageUrl: photo('sanita'),
    description:
      'Mappa dell\'inchiesta sugli appalti per le forniture sanitarie regionali (2024–2026): **38 attori** tra persone, società ed eventi chiave.',
    sources: [{ title: 'Tutti gli articoli del dossier', url: 'https://example.com/archivio/dossier-sanita' }],
    children: [
      org('regione', 'Assessorato alla Sanità', 'stazione appaltante', [
        person('p-assessore', 'Carlo Venturi', 33, 'assessore', [
          person('p-segretario', 'Luca Ferri', 14, 'segretario particolare'),
          ev('ev-nomina', 'Nomina del 2022', 'nominato con'),
        ]),
        org('uff-gare', 'Ufficio gare e contratti', 'struttura interna', [
          person('p-dirigente', 'Anna Sartori', 25, 'dirigente', [
            ev('ev-trasferimento', 'Trasferimento improvviso', 'protagonista di'),
          ]),
        ]),
      ]),
      org('medsupply', 'MedSupply S.r.l.', 'fornitrice principale', [
        person('p-ceo', 'Giorgio Lanza', 53, 'fondatore e CEO', [
          person('p-moglie', 'Elena Lanza', 44, 'socia al 30%'),
          org('immobiliare', 'Lanza Immobiliare', 'controlla anche'),
        ]),
        org('subfor1', 'BioTech Forniture', 'subfornitrice', [
          ev('ev-fallimento', 'Istanza di fallimento 2025', 'colpita da'),
        ]),
        org('subfor2', 'CleanMed Service', 'subfornitrice'),
        ev('ev-fatture', 'Le fatture gonfiate', 'accusata per', [
          { id: 'doc-perizia', title: 'Perizia contabile', type: 'topic', relation: 'documentata da', description: 'Perizia disposta dal GIP: sovrapprezzi medi del **34%**.' },
        ]),
      ]),
      ev('ev-bando23', 'Bando forniture 2023', 'atto chiave', [
        ev('ev-proroga', 'Proroga dei termini', 'modificato da'),
        ev('ev-ricorso', 'Ricorso al TAR', 'impugnato con', [
          org('tar', 'TAR regionale', 'deciso da'),
        ]),
        org('concorrente', 'SanitàPiù S.p.A.', 'esclusa da', [
          person('p-concorrente-ceo', 'Paola Bruni', 38, 'amministratrice'),
        ]),
      ]),
      org('procura2', 'Procura regionale', 'indaga', [
        person('p-pm', 'Davide Coletti', 60, 'pubblico ministero'),
        ev('ev-perquisizioni', 'Perquisizioni di gennaio', 'ha disposto', [
          { id: 'doc-sequestro', title: 'Verbale di sequestro', type: 'topic', relation: 'prodotto', description: 'Sequestrati server e documentazione contabile.' },
        ]),
      ]),
      person('p-whistle', 'La fonte interna', 7, 'ha innescato l\'inchiesta', [
        { id: 'doc-email', title: 'Le email interne', type: 'topic', relation: 'ha fornito', description: 'Catena di email tra ufficio gare e MedSupply.' },
      ]),
      ev('ev-consiglio', 'Question time in Consiglio', 'eco politica', [
        person('p-opposizione', 'Sara Maggi', 20, 'consigliera di opposizione'),
      ]),
    ],
  },
  [
    { source: 'p-ceo', target: 'p-assessore', label: 'cene riservate' },
    { source: 'p-segretario', target: 'medsupply', label: 'ex consulente' },
    { source: 'p-dirigente', target: 'ev-bando23', label: 'ha firmato' },
    { source: 'concorrente', target: 'ev-ricorso', label: 'ha presentato' },
    { source: 'p-whistle', target: 'uff-gare', label: 'ex dipendente' },
  ],
);

/* ------------------------------------------------------------------ */
/* Dataset stress: 100 nodi, profondità 5, generato                   */
/* ------------------------------------------------------------------ */

const TYPES: ConceptNodeType[] = ['person', 'event', 'organization', 'topic'];
const TYPE_TITLES: Record<ConceptNodeType, string[]> = {
  person: ['Testimone', 'Funzionario', 'Imprenditore', 'Consulente', 'Dirigente'],
  event: ['Riunione', 'Bonifico', 'Delibera', 'Ispezione', 'Udienza'],
  organization: ['Società', 'Fondazione', 'Consorzio', 'Ente', 'Studio legale'],
  location: [],
  topic: ['Documento', 'Intercettazione', 'Perizia', 'Verbale', 'Esposto'],
};
const RELATIONS = ['collegato a', 'coinvolto in', 'controlla', 'partecipa a', 'cita', 'finanzia'];

function makeStress(): ReturnType<typeof buildMap> {
  let counter = 0;
  let imgCounter = 1;

  const makeNode = (depth: number, maxDepth: number, childrenCount: number[]): TreeDef => {
    counter++;
    const type = TYPES[counter % TYPES.length];
    const base = TYPE_TITLES[type][counter % 5];
    const id = `n${counter}`;
    const title = `${base} ${counter}`;
    const kids: TreeDef[] = [];
    const n = depth < maxDepth ? (childrenCount[depth] ?? 0) : 0;
    const def: TreeDef = {
      id,
      title,
      type,
      relation: RELATIONS[counter % RELATIONS.length],
      imageUrl:
        counter % 7 === 0
          ? 'https://example.invalid/broken.png' // fallback test
          : type === 'person'
            ? avatar((imgCounter++ % 70) + 1)
            : photo(id),
      description: `Elemento generato per lo stress test (profondità ${depth}). **${title}** fa parte del ramo ${id}.`,
      sources: [{ title: `Fonte d'archivio per ${title}`, url: `https://example.com/archivio/${id}` }],
      children: kids,
    };
    for (let i = 0; i < n; i++) kids.push(makeNode(depth + 1, maxDepth, childrenCount));
    return def;
  };

  // Struttura: radice con 9 rami; i rami si assottigliano in profondità.
  // Totale ≈ 100 nodi, profondità massima 5.
  const root: TreeDef = {
    id: 'stress-root',
    title: 'Operazione Cento Fili',
    type: 'event',
    imageUrl: photo('centofili'),
    description: 'Stress test: **100 nodi**, profondità 5, cross-link multipli.',
    children: [],
  };

  // childrenCount[depth] = figli per nodo a quella profondità
  const profiles: number[][] = [
    [0, 3, 2, 1, 1], // ramo profondo
    [0, 3, 2, 1, 0],
    [0, 2, 2, 0, 0],
    [0, 2, 1, 0, 0],
    [0, 3, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 1, 1, 1, 1], // catena lunga
    [0, 2, 1, 0, 0],
    [0, 0, 0, 0, 0], // foglia diretta
    [0, 3, 2, 1, 0],
    [0, 2, 2, 1, 0],
    [0, 3, 0, 0, 0],
  ];
  for (const profile of profiles) {
    root.children!.push(makeNode(1, 5, profile));
  }

  const total = counter + 1;
  // Cross-link sparsi tra rami diversi
  const cross = [
    { source: 'n2', target: 'n20', label: 'stesso conto corrente' },
    { source: 'n5', target: 'n31', label: 'citato in' },
    { source: 'n12', target: 'n40', label: 'stessa sede legale' },
    { source: 'n18', target: 'n3', label: 'parente di' },
    { source: 'n25', target: 'n50', label: 'bonifico verso' },
  ].filter((c) => Number(c.source.slice(1)) < total && Number(c.target.slice(1)) < total);

  return buildMap(root, cross);
}

export const stressMap = makeStress();
