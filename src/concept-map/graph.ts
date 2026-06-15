import type { ConceptEdgeData, ConceptMapData, ConceptNodeData } from './types';

/**
 * Indice del grafo, calcolato una volta per mappa.
 */
export interface GraphIndex {
  root: ConceptNodeData;
  byId: Map<string, ConceptNodeData>;
  /** label dell'arco gerarchico parent->child, indicizzata per id del figlio */
  treeEdgeLabels: Map<string, string | undefined>;
  /** archi che NON coincidono con una relazione parent/figlio */
  crossLinks: ConceptEdgeData[];
  /** profondità di ogni nodo (root = 0) */
  depths: Map<string, number>;
}

export function buildGraphIndex(map: ConceptMapData): GraphIndex {
  const byId = new Map<string, ConceptNodeData>();
  for (const n of map.nodes) {
    if (byId.has(n.id)) console.warn(`[concept-map] id duplicato ignorato: ${n.id}`);
    else byId.set(n.id, n);
  }

  const root = byId.get(map.rootId);
  if (!root) throw new Error(`[concept-map] rootId "${map.rootId}" non presente tra i nodi`);

  // Profondità via BFS lungo childrenIds (ignora nodi irraggiungibili).
  const depths = new Map<string, number>([[root.id, 0]]);
  const queue = [root.id];
  while (queue.length > 0) {
    const id = queue.shift()!;
    const node = byId.get(id)!;
    for (const childId of node.childrenIds) {
      const child = byId.get(childId);
      if (!child) {
        console.warn(`[concept-map] figlio inesistente "${childId}" su nodo "${id}"`);
        continue;
      }
      if (depths.has(childId)) continue; // già visitato
      depths.set(childId, depths.get(id)! + 1);
      queue.push(childId);
    }
  }
  for (const n of map.nodes) {
    if (!depths.has(n.id)) console.warn(`[concept-map] nodo irraggiungibile dalla radice: ${n.id}`);
  }

  // Classificazione archi: gerarchico se collega parent e figlio (in una delle due direzioni).
  const treeEdgeLabels = new Map<string, string | undefined>();
  const crossLinks: ConceptEdgeData[] = [];
  for (const e of map.edges) {
    const s = byId.get(e.source);
    const t = byId.get(e.target);
    if (!s || !t) {
      console.warn(`[concept-map] arco "${e.id}" con estremo inesistente, ignorato`);
      continue;
    }
    if (t.parentId === s.id) treeEdgeLabels.set(t.id, e.label);
    else if (s.parentId === t.id) treeEdgeLabels.set(s.id, e.label);
    else crossLinks.push(e);
  }

  return { root, byId, treeEdgeLabels, crossLinks, depths };
}

/**
 * Stato di espansione "accordion": una sola catena di nodi espansi che parte
 * dalla radice (la radice è sempre espansa ed è implicita).
 * `expandedChain = ['a', 'b']` significa: root espansa, poi `a` (figlio della
 * radice), poi `b` (figlio di `a`).
 */
export function chainTo(index: GraphIndex, nodeId: string): string[] {
  const chain: string[] = [];
  let cur: ConceptNodeData | undefined = index.byId.get(nodeId);
  while (cur && cur.parentId !== null) {
    chain.unshift(cur.id);
    cur = index.byId.get(cur.parentId);
  }
  return chain;
}

export interface VisibleGraph {
  /** in ordine BFS, per un tab-order coerente */
  nodes: ConceptNodeData[];
  visibleIds: Set<string>;
  /** id dei nodi attualmente espansi (radice esclusa) */
  expandedIds: Set<string>;
  /** cross-link con entrambi gli estremi visibili */
  visibleCrossLinks: ConceptEdgeData[];
}

export function computeVisible(index: GraphIndex, expandedChain: string[]): VisibleGraph {
  const expandedIds = new Set(expandedChain);
  const visibleIds = new Set<string>([index.root.id]);
  const nodes: ConceptNodeData[] = [index.root];

  const addChildren = (parent: ConceptNodeData) => {
    for (const childId of parent.childrenIds) {
      const child = index.byId.get(childId);
      if (!child || visibleIds.has(childId)) continue;
      visibleIds.add(childId);
      nodes.push(child);
    }
  };

  addChildren(index.root);
  for (const id of expandedChain) {
    const node = index.byId.get(id);
    if (node) addChildren(node);
  }

  const visibleCrossLinks = index.crossLinks.filter(
    (e) => visibleIds.has(e.source) && visibleIds.has(e.target),
  );

  return { nodes, visibleIds, expandedIds, visibleCrossLinks };
}
