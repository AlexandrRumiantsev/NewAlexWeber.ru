import React, { Component } from 'react'
import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'

import '../styles/body/menu.scss';
const ReactDOM = require('react-dom');

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


function Switcher(props) {
  if(props.page == 'index'){
    return <div></div>
  };
  if(props.page == 'projects'){
    return <div className='page_popupp'><Projects store={props.store}/></div>
  };
  if(props.page == 'papers'){
    return <div className='page_popupp'><Papers store={props.store}/></div>
  };
  if(props.page == 'comments'){
    return <div className='page_popupp'><Comments store={props.store}/></div>
  };
  
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
        this.state = {display: false};


  }
  render() {
      return <div id='index'>
                
      <Router>
      <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/Paper">Paper</Link>
              <Link to="/Comment">Comment</Link>
              <Link to="/Project">Project</Link>
        </nav>
        <Switch>
          <Route path="/Paper">
            <Paper />
          </Route>
          <Route path="/Comment">
            <Comment />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  }
}