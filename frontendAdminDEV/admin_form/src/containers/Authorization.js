import React, {
  Component
} from 'react'
import {
  Menu
} from './Menu.js'
import '../styles/header/login.scss';
import {LoginForm} from '../templates/forms/Login.js'

const globalData = {}

export class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoriz: [],
      checkbox: 'false'
    };
    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    globalData.component = this;
  }
  eventClick(log, pass) {

    globalData.store = this.props.store;

    let data = this.props.store.dispatch({
      type: 'LoginUser',
      val: {
        'log': log,
        'pass': pass,
        'callback': function (val) {
          
        }
      },
      store: this.props.store
    })
    //console.log(this);
  }
  check() {
    if(sessionStorage.getItem('log') && sessionStorage.getItem('pass')){
      globalData.component.eventClick(
            sessionStorage.getItem('log'),
            sessionStorage.getItem('pass')
      );

      window.location.reload(false);
    }else{
      let log = document.getElementById('log').value;
      let pass = document.getElementById('pass').value;
      sessionStorage.setItem('log', log);
      sessionStorage.setItem('pass', pass);
      globalData.component.eventClick(log, pass);
      //window.location.reload(false);
    }
  } 
  render() {
    if (sessionStorage.getItem('log') && sessionStorage.getItem('pass'))
      return <Menu log={ sessionStorage.getItem('log') } 
                   store = {this.props.store}
                   authComponent={this}
                  />
      else
        return <LoginForm check={this.check} />
  }
}
