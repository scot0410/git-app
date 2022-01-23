import React from 'react';
import { Canvas } from 'reaflow';

export default BasicTimeline => (
  <Canvas
    maxWidth={800}
    maxHeight={600}
    direction={"UP"}
    nodes={[
      {
        id: '1',
        text: 'main'
      },
      {
        id: '2',
        text: '2'
      },
      {
        id: '3',
        text: '3'
      }
    ]}
    edges={[
      {
        id: '1-2',
        from: '1',
        to: '2'
      },
      {
        id: '1-3',
        from: '1',
        to: '3'
      }
    ]}
  />
);