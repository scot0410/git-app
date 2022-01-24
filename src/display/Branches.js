import React, {useEffect, useState} from 'react';
import { Canvas } from 'reaflow';

export default function Branches(props) {
// useEffect(()=>{
//   console.log("props", props)
// }, [props]);

let theseNodes = [
  {
    id: '1',
    text: 'tt'
  }
]

let edges = [
  {
    id: '1-2',
    from: '1',
    to: '2'
  }
]

return (
<Canvas
    maxWidth={800}
    maxHeight={600}
    direction={"UP"}
    nodes={theseNodes}
    edges={edges}
  />
)};