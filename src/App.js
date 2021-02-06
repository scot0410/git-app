import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactTerminal from 'react-terminal-component';
import Terminal from 'react-terminal-component'
import {
  EmulatorState, OutputFactory, Outputs, FileSystem, CommandMapping, defaultCommandMapping
} from 'javascript-terminal';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
}));

export default function App() {
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
  // const defaultState = EmulatorState.createEmpty();
  // const defaultOutputs = defaultState.getOutputs();
  // const emulatorState = defaultState.setOutputs(newOutputs);


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <ReactTerminal
          inputStr=''
          emulatorState={customState}
        />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}