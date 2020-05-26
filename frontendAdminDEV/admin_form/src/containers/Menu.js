import React, { Component } from 'react'
import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'

import Dashboard from './Dashboard'
import '../styles/body/menu.scss';
const ReactDOM = require('react-dom');



import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { RightMenu } from './listItems';

import * as myModule from '../lib/';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const globalData = {}

function Project() {
  return <div className='page_popupp'><Projects store={globalData.store}/></div>
}
function Paper() {
  return <div className='page_popupp'><Papers store={globalData.store}/></div>
}
function Comment() {
  return <div className='page_popupp'><Comments store={globalData.store}/></div>
}
function Main() {
  return <div id='main-container' ><Dashboard /></div>
}
function check(that){
  console.log(that.state.display);  
}


export class Menu extends Component {
  constructor () {
        super(...arguments);
        const { store } = this.props
        globalData.store = store;
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        myModule.liba.setGlobalStore(store);
        myModule.liba.routerState(this);
        this.state = {display: 'main'};


  }
  render() {
      console.log(this.props.authComponent)
      switch(this.state.display){
            case 'comment':
              return <div className='container-main'>
                <RightMenu aut={this.props.authComponent} main={this}/>
                <Comment />
              </div>
            break;
            case 'project':
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Project />
              </div>
            break;
            case 'paper':
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Paper />
              </div>
            break;  
            default: 
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Main />
              </div>
      }
    }       
}