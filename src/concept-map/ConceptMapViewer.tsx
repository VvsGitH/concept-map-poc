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
import { buildGraphIndex, chainTo, computeVisible } from './graph';
import { NODE_H, NODE_W, radialLayout } from './layout';
import { ConceptNode } from './ConceptNode';
import type { ConceptFlowNode } from './ConceptNode';
import { NodeModal } from './NodeModal';
import { TYPE_STYLES } from './palette';
import './concept-map.css';

export interface ConceptMapViewerProps {
  map: ConceptMapData;
}

const nodeTypes = { concept: ConceptNode };

const CROSS_COLOR = '#A8332E';

function Viewer({ map }: ConceptMapViewerProps) {
  const { fitView } = useReactFlow();

  const index = useMemo(() => buildGraphIndex(map), [map]);

  // Catena accordion dei nodi espansi (radice esclusa, sempre espansa).
  const [expandedChain, setExpandedChain] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Reset dello stato quando cambia la mappa.
  useEffect(() => {
    setExpandedChain([]);
    setSelectedId(null);
  }, [index]);

  const visible = useMemo(() => computeVisible(index, expandedChain), [index, expandedChain]);
  const positions = useMemo(() => radialLayout(index, visible), [index, visible]);

  const onToggle = useCallback(
    (id: string) => {
      setExpandedChain((chain) => {
        if (chain.includes(id)) return chain.slice(0, chain.indexOf(id)); // collassa
        return chainTo(index, id); // espande, collassando i rami fratelli
      });
    },
    [index],
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
      const label = index.treeEdgeLabels.get(n.id);
      edges.push({
        id: `t-${n.id}`,
        source: n.parentId,
        target: n.id,
        type: 'straight',
        label,
        focusable: false,
        style: { stroke: '#C9C4B8', strokeWidth: 1.5 },
        labelStyle: { fill: '#6B6657', fontSize: 11, fontFamily: 'Inter, sans-serif' },
        labelBgStyle: { fill: '#FCFBF8', fillOpacity: 0.92 },
        labelBgPadding: [6, 3],
        labelBgBorderRadius: 6,
      });
    }
    for (const e of visible.visibleCrossLinks) {
      edges.push({
        id: `x-${e.id}`,
        source: e.source,
        target: e.target,
        type: 'straight',
        label: e.label,
        focusable: false,
        style: { stroke: CROSS_COLOR, strokeWidth: 1.5, strokeDasharray: '6 5', opacity: 0.8 },
        labelStyle: { fill: CROSS_COLOR, fontSize: 11, fontFamily: 'Inter, sans-serif', fontWeight: 500 },
        labelBgStyle: { fill: '#FCFBF8', fillOpacity: 0.92 },
        labelBgPadding: [6, 3],
        labelBgBorderRadius: 6,
      });
    }
    return edges;
  }, [visible, index]);

  // fitView: sul sottoalbero appena espanso, o su tutto dopo un collasso.
  const prevChainLen = useRef(0);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : 500;
    const expanded = expandedChain.length > prevChainLen.current;
    prevChainLen.current = expandedChain.length;

    const id = window.setTimeout(() => {
      if (expanded) {
        const focusId = expandedChain[expandedChain.length - 1];
        const focusNode = index.byId.get(focusId);
        if (focusNode) {
          const ids = [{ id: focusId }, ...focusNode.childrenIds.map((c) => ({ id: c }))];
          void fitView({ nodes: ids, duration, padding: 0.3 });
          return;
        }
      }
      void fitView({ duration, padding: 0.15 });
    }, 60);
    return () => window.clearTimeout(id);
  }, [expandedChain, index, fitView]);

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
          <span className="cm-legend__item">
            <span className="cm-legend__dash" />
            Collegamento trasversale
          </span>
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
