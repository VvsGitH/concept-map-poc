import type {
  ConceptEdgeData,
  ConceptMapData,
  ConceptNodeData,
  ConceptNodeType,
  SourceLink,
} from '../../concept-map';

export interface TreeDef {
  id: string;
  title: string;
  type: ConceptNodeType;
  imageUrl?: string;
  description?: string;
  sources?: SourceLink[];
  /** label dell'arco verso il parent */
  relation?: string;
  children?: TreeDef[];
}

export interface CrossDef {
  source: string;
  target: string;
  label?: string;
}

/**
 * Converte una definizione annidata (comoda da scrivere a mano) nel formato
 * flat del contratto server: nodi con parentId/childrenIds + lista archi.
 */
export function buildMap(root: TreeDef, cross: CrossDef[] = []): ConceptMapData {
  const nodes: ConceptNodeData[] = [];
  const edges: ConceptEdgeData[] = [];

  const visit = (def: TreeDef, parentId: string | null) => {
    nodes.push({
      id: def.id,
      title: def.title,
      type: def.type,
      parentId,
      childrenIds: (def.children ?? []).map((c) => c.id),
      imageUrl: def.imageUrl,
      description: def.description,
      sources: def.sources,
    });
    if (parentId !== null) {
      edges.push({ id: `e-${parentId}-${def.id}`, source: parentId, target: def.id, label: def.relation });
    }
    for (const child of def.children ?? []) visit(child, def.id);
  };
  visit(root, null);

  for (const c of cross) {
    edges.push({ id: `e-${c.source}-${c.target}`, source: c.source, target: c.target, label: c.label });
  }

  return { rootId: root.id, nodes, edges };
}
