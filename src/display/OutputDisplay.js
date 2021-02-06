
import React, { useState } from 'react'
import Tree from 'react-tree-graph';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%'
    }
  }));

export default function OutputDisplay(){
    const classes = useStyles();
    let [data, setData] = useState({  
        name: 'Master',
        children: []
        //     {
        //     name: 'Child One'
        // }, {
        //     name: 'Child Two'
        // }]
    })

    return(
        <Paper className={classes.paper}>
            <Tree
                data={data}
                height={400}
                width={400}
                svgProps={{
                    transform: 'rotate(-90)',
                    className: 'custom'
                }}/>
        </Paper>
    )
}