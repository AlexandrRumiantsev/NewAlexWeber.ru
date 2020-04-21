import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'

import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'


import Main from '../components/Main'
import * as pageActions from '../actions/PageActions'


function Switcher(props) {
  if(props.page == 'index'){
    return <div>Главная</div>
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


class App extends Component {
   constructor () {
        super(...arguments);
        /* 
          алгоритм необходимы для обновления компонента, 
          посли изменения состояния хранилища 
        */
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

    }
  renderSwitch(param) {
      switch(param) {
        case 'foo':
          return 'bar';
        default:
          return 'foo';
      }
  }
  render() {
    const { user, main, store } = this.props 
    return <div>
              <User name={user.name} />

              <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'projects', 
                            val: 'projects'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Проекты
                    </div>
              </div>

              <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'papers', 
                            val: 'papers'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Статьи
                    </div>
              </div>

              <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'comments', 
                            val: 'comments'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Комментарии
                    </div>
              </div>

               <Switcher store={store} page={store.getState().switcher.page}/>

          </div>
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