import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BasicTimeline from './display/TimelineTest';

import TerminalDisplay from './terminal/TerminalDisplay'
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TerminalDisplay />
        </Grid>
        <Grid item xs={6}>
        <BasicTimeline/>
        </Grid>
        {/* <Grid item xs={6}>
          // <OutputDisplay/>
          // <BasicTimeline/>
        </Grid> */}
      </Grid>
    </div>
  );
}