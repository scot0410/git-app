import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Branches from './display/Branches';

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
  // const [setNodes, nodes] = useState(); 
  // const [setEdges, edges] = useState();

  let nodes = [];
  let edges = [];

  const setOutput = (opts) =>  {
    console.log("in app.js", opts);
    nodes.push([{
        id: '1',
        text: 'tt'
      }])
      console.log("nodes", nodes);
    // setNodes([{
    //   id: '1',
    //   text: 'tt'
    // }])
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TerminalDisplay collectCommand={setOutput}/>
        </Grid>
        <Grid item xs={6}>
          <Branches nodes={nodes} edges={edges}/>
        </Grid>
      </Grid>
    </div>
  );
}