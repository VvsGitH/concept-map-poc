import { hierarchy, tree } from 'd3-hierarchy';
import type { GraphIndex, VisibleGraph } from './graph';
import type { ConceptNodeData } from './types';

export const NODE_W = 150;
export const NODE_H = 120;

const TWO_PI = Math.PI * 2;
/** distanza minima tra due anelli concentrici */
const MIN_RING_GAP = 250;
/** spazio orizzontale "ideale" per nodo lungo la circonferenza */
const NODE_ARC_SPACE = NODE_W + 56;

interface TreeDatum {
  node: ConceptNodeData;
  children: TreeDatum[];
}

/**
 * Calcola le posizioni (centro del nodo) per i soli nodi visibili.
 * Strategia: d3 `tree()` su [0, 2π] per gli angoli; il raggio di ogni anello
 * è il massimo tra (anello precedente + gap) e la circonferenza necessaria a
 * ospitare i nodi di quel livello senza sovrapposizioni.
 */
export function radialLayout(
  index: GraphIndex,
  visible: VisibleGraph,
): Map<string, { x: number; y: number }> {
  const buildDatum = (node: ConceptNodeData): TreeDatum => ({
    node,
    children: node.childrenIds
      .filter((id) => visible.visibleIds.has(id))
      .map((id) => buildDatum(index.byId.get(id)!)),
  });

  const rootDatum = buildDatum(index.root);
  const h = hierarchy<TreeDatum>(rootDatum, (d) => d.children);

  const layout = tree<TreeDatum>()
    .size([TWO_PI, 1])
    .separation((a, b) => ((a.parent === b.parent ? 1 : 1.5) / Math.max(a.depth, 1)));
  const laidOut = layout(h);

  // Conteggio nodi per profondità → raggio per anello.
  const countByDepth = new Map<number, number>();
  laidOut.each((d) => countByDepth.set(d.depth, (countByDepth.get(d.depth) ?? 0) + 1));
  const maxDepth = Math.max(...countByDepth.keys());

  const ringRadius: number[] = [0];
  for (let d = 1; d <= maxDepth; d++) {
    const needed = ((countByDepth.get(d) ?? 0) * NODE_ARC_SPACE) / TWO_PI;
    ringRadius[d] = Math.max(ringRadius[d - 1] + MIN_RING_GAP, needed);
  }

  const positions = new Map<string, { x: number; y: number }>();
  laidOut.each((d) => {
    if (d.depth === 0) {
      positions.set(d.data.node.id, { x: 0, y: 0 });
      return;
    }
    const angle = d.x - Math.PI / 2; // 0 = ore 12
    const r = ringRadius[d.depth];
    positions.set(d.data.node.id, {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
    });
  });

  return positions;
}
