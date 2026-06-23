/**
 * Edge custom che usa EdgeLabelRenderer per renderizzare la label in un div HTML
 * sopra il layer dei nodi, evitando che venga coperta dai blocchi.
 */
import { BaseEdge, EdgeLabelRenderer, getStraightPath } from '@xyflow/react';
import type { EdgeProps } from '@xyflow/react';

// EdgeProps senza generico usa Edge<Record<string,unknown>> come base,
// compatibile con EdgeTypes. Il data viene castato internamente.
export function LabelEdge({
  id,
  label,
  style,
  ...props
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getStraightPath(props);
  const angle = getLabelAngle(props);

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} />
      {label && (
        <EdgeLabelRenderer>
          <span
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px) rotate(${angle}deg)`,
              background: 'rgba(252, 251, 248, 0.92)',
              color: style?.color ?? '#6B6657',
              fontSize: 11,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              padding: '3px 6px',
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
            // nodrag + nopan: impedisce che il click sulla label muova il canvas
            className="nodrag nopan"
          >
            {label}
          </span>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

// Calcolo l'angolo della lable in modo che sia perpendicolare all'arco
function getLabelAngle({
  targetY,
  sourceY,
  targetX,
  sourceX
}: Pick<EdgeProps, 'targetX' | 'targetY' | 'sourceX' | 'sourceY'>) {
  const edgeAngle = (Math.atan2(targetY - sourceY, targetX - sourceX) * 180) / Math.PI;
  let angle = edgeAngle + 90;
  if (angle > 90) angle -= 180;
  if (angle < -90) angle += 180;
  return angle;
}
