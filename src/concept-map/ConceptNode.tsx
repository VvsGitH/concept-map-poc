import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { Node, NodeProps } from '@xyflow/react';
import type { ConceptNodeData } from './types';
import { TYPE_STYLES } from './palette';

export interface ConceptFlowNodeData extends Record<string, unknown> {
  node: ConceptNodeData;
  isRoot: boolean;
  isExpanded: boolean;
  childCount: number;
  onToggle: (id: string) => void;
  onOpen: (id: string) => void;
}

export type ConceptFlowNode = Node<ConceptFlowNodeData, 'concept'>;

const hiddenHandle: React.CSSProperties = {
  opacity: 0,
  pointerEvents: 'none',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1,
  height: 1,
  minWidth: 0,
  minHeight: 0,
  border: 'none',
};

function ConceptNodeInner({ data }: NodeProps<ConceptFlowNode>) {
  const { node, isRoot, isExpanded, childCount, onToggle, onOpen } = data;
  const style = TYPE_STYLES[node.type];
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = node.imageUrl && !imgFailed;
  const canExpand = childCount > 0 && !isRoot;

  return (
    <div
      className={`cm-node ${isRoot ? 'cm-node--root' : ''} ${isExpanded ? 'cm-node--expanded' : ''}`}
      style={{ ['--cm-type-color' as string]: style.color, ['--cm-type-tint' as string]: style.tint }}
    >
      {/* Handle invisibili al centro: gli archi corrono da centro a centro */}
      <Handle type="target" position={Position.Top} style={hiddenHandle} isConnectable={false} />
      <Handle type="source" position={Position.Bottom} style={hiddenHandle} isConnectable={false} />

      <button
        type="button"
        className="cm-node__card"
        onClick={() => onOpen(node.id)}
        aria-haspopup="dialog"
        aria-label={`${node.title}, ${style.label}${
          childCount > 0 ? `, ${childCount} collegamenti` : ''
        }. Apri la scheda.`}
      >
        <span className="cm-node__avatar" aria-hidden="true">
          {showImage ? (
            <img src={node.imageUrl} alt="" onError={() => setImgFailed(true)} loading="lazy" />
          ) : (
            <span className="cm-node__initial">{node.title.charAt(0).toUpperCase()}</span>
          )}
        </span>
        <span className="cm-node__title">{node.title}</span>
        <span className="cm-node__type">{style.label}</span>
      </button>

      {canExpand && (
        <button
          type="button"
          className="cm-node__toggle"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(node.id);
          }}
          aria-expanded={isExpanded}
          aria-label={
            isExpanded
              ? `Chiudi i collegamenti di ${node.title}`
              : `Mostra i ${childCount} collegamenti di ${node.title}`
          }
        >
          <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
        </button>
      )}
    </div>
  );
}

export const ConceptNode = memo(ConceptNodeInner);
