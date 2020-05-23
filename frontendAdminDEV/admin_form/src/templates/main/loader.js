import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


/**
 * Template loader
 * @returns {html} Returns template loader with style.
 */

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
});

export function Loader(){
  const classes = useStyles();
  return <div className={classes.root}>
      <CircularProgress size={100} disableShrink />
    </div>;   
}