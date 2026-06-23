import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Background,
  BackgroundVariant,
  Controls,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react';
import type { Edge, ReactFlowProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { ConceptMapData, ConceptNodeData } from './types';
import { buildGraphIndex, chainTo, collectDescendants, computeVisible } from './graph';
import { NODE_H, NODE_W, radialLayout } from './layout';
import { ConceptNode } from './ConceptNode';
import type { ConceptFlowNode } from './ConceptNode';
import { NodeModal } from './NodeModal';
import { TYPE_STYLES } from './palette';
import { LabelEdge } from './LabelEdge';
import './concept-map.css';

export interface ConceptMapViewerProps {
  map: ConceptMapData;
  /**
   * Se true (default) apre un solo ramo per livello (accordion):
   * aprire un nodo collassa gli altri rami.
   * Se false, più rami restano aperti contemporaneamente (multi-expand).
   */
  autoCollapseSiblings?: boolean;
}

const nodeTypes = { concept: ConceptNode };
const edgeTypes = { 'label-edge': LabelEdge };

const CROSS_COLOR = '#A8332E';

function Viewer({ map, autoCollapseSiblings = true }: ConceptMapViewerProps) {
  const { fitView } = useReactFlow();

  const index = useMemo(() => {
    console.log(map);
    return buildGraphIndex(map);
  }, [map]);

  // Insieme dei nodi espansi (radice esclusa, sempre espansa).
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const lastAction = useRef<{ id: string; type: 'expand' | 'collapse' } | null>(null);

  // Reset dello stato quando cambia la mappa.
  useEffect(() => {
    setExpandedIds(new Set());
    setSelectedId(null);
    lastAction.current = null;
  }, [index]);

  const visible = useMemo(() => computeVisible(index, expandedIds), [index, expandedIds]);
  const positions = useMemo(() => radialLayout(index, visible), [index, visible]);

  const onToggle = useCallback(
    (id: string) => {
      // Leggiamo lo stato corrente fuori dall'updater per non introdurre
      // effetti collaterali dentro una funzione pura (React StrictMode chiama
      // l'updater due volte in sviluppo per rilevare impurità).
      lastAction.current = { id, type: expandedIds.has(id) ? 'collapse' : 'expand' };
      setExpandedIds((prev) => {
        if (prev.has(id)) {
          // COLLASSO (identico nelle due modalità): rimuovi id + discendenti
          const next = new Set(prev);
          next.delete(id);
          for (const d of collectDescendants(index, id)) next.delete(d);
          return next;
        }
        // ESPANSIONE
        const chain = chainTo(index, id);
        if (autoCollapseSiblings) return new Set(chain);        // accordion: sostituisce
        return new Set([...prev, ...chain]);                    // multi-expand: unione
      });
    },
    [index, autoCollapseSiblings, expandedIds],
  );

  const onOpen = useCallback((id: string) => setSelectedId(id), []);

  const rfNodes = useMemo<ConceptFlowNode[]>(
    () =>
      visible.nodes.map((n) => {
        const pos = positions.get(n.id) ?? { x: 0, y: 0 };
        return {
          id: n.id,
          type: 'concept' as const,
          position: { x: pos.x - NODE_W / 2, y: pos.y - NODE_H / 2 },
          width: NODE_W,
          height: NODE_H,
          draggable: false,
          selectable: false,
          focusable: false, // il focus va sui <button> interni
          data: {
            node: n,
            isRoot: n.id === index.root.id,
            isExpanded: visible.expandedIds.has(n.id),
            childCount: n.childrenIds.length,
            onToggle,
            onOpen,
          },
        };
      }),
    [visible, positions, index, onToggle, onOpen],
  );

  const rfEdges = useMemo<Edge[]>(() => {
    const edges: Edge[] = [];
    for (const n of visible.nodes) {
      if (n.parentId === null || !visible.visibleIds.has(n.parentId)) continue;
      edges.push({
        id: `t-${n.id}`,
        source: n.parentId,
        target: n.id,
        type: 'label-edge',
        label: index.treeEdgeLabels.get(n.id),
        focusable: false,
        style: { color: '#6B6657', stroke: '#C9C4B8', strokeWidth: 1.5 },
      });
    }
    for (const e of visible.visibleCrossLinks) {
      edges.push({
        id: `x-${e.id}`,
        source: e.source,
        target: e.target,
        type: 'label-edge',
        label: e.label,
        focusable: false,
        style: { color: CROSS_COLOR, stroke: CROSS_COLOR, strokeWidth: 1.5, strokeDasharray: '6 5', opacity: 0.8 },
      });
    }
    return edges;
  }, [visible, index]);

  // fitView: sul sottoalbero appena espanso, o su tutto dopo un collasso.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : 500;
    const action = lastAction.current;

    const id = window.setTimeout(() => {
      if (action?.type === 'expand') {
        const focusNode = index.byId.get(action.id);
        if (focusNode) {
          const ids = [{ id: action.id }, ...focusNode.childrenIds.map((c) => ({ id: c }))];
          void fitView({ nodes: ids, duration, padding: 0.3 });
          return;
        }
      }
      void fitView({ duration, padding: 0.15 });
    }, 60);
    return () => window.clearTimeout(id);
  }, [expandedIds, index, fitView]);

  const selectedNode: ConceptNodeData | null = selectedId
    ? (index.byId.get(selectedId) ?? null)
    : null;

  const handleNodeClick: ReactFlowProps['onNodeClick'] = (_, node) => {
    console.log(node);
  };

  return (
    <div className="cm-root" role="application" aria-label="Mappa concettuale interattiva">
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.1}
        maxZoom={2}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: false }}
        onNodeClick={handleNodeClick}
      >
        <Background variant={BackgroundVariant.Dots} gap={26} size={1.4} color="#DDD8CC" />
        <Controls showInteractive={false} position="bottom-right" />
        <Panel position="bottom-left" className="cm-legend" aria-hidden="true">
          {Object.values(TYPE_STYLES).map((t) => (
            <span key={t.label} className="cm-legend__item">
              <span className="cm-legend__dot" style={{ background: t.color }} />
              {t.label}
            </span>
          ))}
        </Panel>
      </ReactFlow>
      <NodeModal node={selectedNode} onClose={() => setSelectedId(null)} />
    </div>
  );
}

export function ConceptMapViewer(props: ConceptMapViewerProps) {
  return (
    <ReactFlowProvider>
      <Viewer {...props} />
    </ReactFlowProvider>
  );
}
