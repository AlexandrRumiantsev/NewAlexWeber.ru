import React, {
  Component
} from 'react'
import {
  bindActionCreators
} from 'redux'
import {
  connect
} from 'react-redux'
import User from '../components/User'

import Main from '../components/Main'
import * as pageActions from '../actions/PageActions'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ReactDOM = require('react-dom');

import {
  Authorization
} from './Authorization.js'


class App extends Component {
  constructor() {
    super(...arguments);
    /* 
      алгоритм необходимы для обновления компонента, 
      посли изменения состояния хранилища 
    */

    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    this.state = {
      display: false
    };

  }
  componentDidMount() {

  }
  render() {
    return <Authorization store = {
      this.props.store
    }
    />
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    main: state.main
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)