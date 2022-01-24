import React, {useEffect, useState} from 'react';
import { Canvas, hasLink, NodeData, EdgeData } from 'reaflow';

export default function Branches() {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      id: '1',
      text: '1'
    },
    {
      id: '2',
      text: '2'
    }
  ]);
  const [edges, setEdges] = useState<EdgeData[]>([]);

return (
<Canvas
    maxWidth={800}
    maxHeight={600}
    direction={"UP"}
    nodes={nodes}
    edges={edges}
  />
)};