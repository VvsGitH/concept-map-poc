/**
 * Contratto dati della mappa concettuale, così come fornito dal server.
 *
 * - La gerarchia è esplicita: ogni nodo dichiara `parentId` e `childrenIds`.
 * - `edges` contiene le relazioni con etichetta. Un arco che collega un nodo
 *   al proprio parent/figlio è un "arco gerarchico" (la sua label viene
 *   mostrata sul ramo dell'albero); qualunque altro arco è un cross-link.
 */

export type ConceptNodeType = 'person' | 'event' | 'organization' | 'other';

export interface SourceLink {
  title: string;
  url: string;
}

export interface ConceptNodeData {
  id: string;
  title: string;
  type: ConceptNodeType;
  /** `null` solo per il nodo radice. */
  parentId: string | null;
  childrenIds: string[];
  imageUrl?: string | null;
  /** Markdown supportato. */
  description?: string;
  sources?: SourceLink[] | null;
}

export interface ConceptEdgeData {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface ConceptMapData {
  rootId: string;
  nodes: ConceptNodeData[];
  edges: ConceptEdgeData[];
}
