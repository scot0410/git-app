import React, {useState, useEffect, setState, pros} from 'react'
import ReactTerminal from 'react-terminal-component';

import {
    EmulatorState, OutputFactory, Outputs, FileSystem, CommandMapping, defaultCommandMapping
  } from 'javascript-terminal';

export default function TerminalDisplay(){
  const [input, setInput] = useState("")

  // useEffect(()=>{
  //   setState(state => ({...state, input: props.input}));
  //   console.log(`updated here ${input}`, )
  // }, [props.input])

  function collectCommand(opts) {
    console.log(opts)
  }

  const customState = EmulatorState.create({
      'commandMapping': CommandMapping.create({
        ...defaultCommandMapping,
        'print': {
          'function': (state, opts) => {
            const input = opts.join(' ');
            return {
              output: OutputFactory.makeTextOutput(input)
            };
          },
          'optDef': {}
        },
        'git': {
          'function': (state, opts) => {
            const input = opts.join(' ');
            collectCommand(input);
            return {
              output: OutputFactory.makeTextOutput(input)
            };
          },
          'optDef': {}
        }
    }),
    
    'fs': FileSystem.create({
      '/home': { },
      '/home/README': {content: 'This is a text file'},
      '/home/nested/directory': {},
      '/home/nested/directory/file': {content: 'End of nested directory!'}
    })
  });
    return(
        <ReactTerminal
          inputStr={input}
          emulatorState={customState}
        />
    )
}