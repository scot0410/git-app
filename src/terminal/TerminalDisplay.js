import React from 'react'
import ReactTerminal from 'react-terminal-component';

import {
    EmulatorState, OutputFactory, Outputs, FileSystem, CommandMapping, defaultCommandMapping
  } from 'javascript-terminal';

export default function TerminalDisplay(){
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
          inputStr=''
          emulatorState={customState}
        />
    )
}