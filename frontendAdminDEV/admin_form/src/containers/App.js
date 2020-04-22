import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'

import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'

import axios from 'axios';

import Main from '../components/Main'
import * as pageActions from '../actions/PageActions'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ReactDOM = require('react-dom');

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
        //console.log(store);
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

        this.state = {display: false};

    }
  componentDidMount(){
    alert('xx');
  }
  render() {
      return <Authorization store={this.props.store} />
  }
}




class Authorization extends React.Component{
    
    
        
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
          autoriz: [],
          checkbox: 'false'
        };
    }
    check(item){
        
        let log = document.getElementById('log').value;
        let pass = document.getElementById('pass').value;
        
        if(item == 'true'){
            cookies.set('login', log, { path: '/' });
            cookies.set('password', pass, { path: '/' });
        }
        if(item == 'false'){
            cookies.set('login', '', { path: '/' });
            cookies.set('password', '', { path: '/' });
        }
        this.onClick(log , pass);
    }
    onClick(log , pass){
       axios.get('http://alexweber.ru:5000/login?login=' + log + '&password=' + pass)
          .then( response => {
            console.log(response);
            if (response.data.length != 0) 
                ReactDOM.render(<Menu store={this.props.store}  />,  document.getElementById('app'))
            else{
                alert('Неверный логин или пароль');
            }   
          })
          .catch(error => {
              console.log(error)
          });
          
    }
    render(){
        return (
          <div>

             <div className="box Authorization">
              <h1>Авторизация пользователя</h1>
              <form>
                <div className="inputbox">
                  <input required id="log" type="text" name="login"/>
                  <label>Username</label>
                </div>
                <div className="inputbox">
                  <input required id="pass" type="password" name="password"/>
                  <label>Password</label>
                </div>

                <div className='box__btn'>
                <div onClick={ ()=>{ this.check(this.state.checkbox) } } className='sbm'>Войти</div>
                <span className='span_save' onClick={ 
                            ()=>{ 
                               
                                if(this.state.checkbox=='false'){
                                     this.setState({
                                      checkbox: 'true'
                                    })
                                }
                                if(this.state.checkbox=='true'){
                                     this.setState({
                                      checkbox: 'false'
                                    })
                                }    

                            }
                         }> 
                            <input type='checkbox' name='check' id='check'/>
                             Запомнить
                         </span>
                   </div>      
              </form>             
            </div>
             </div>
        )
    }
}



class Menu extends Component {
   constructor () {
        super(...arguments);
        /* 
          алгоритм необходимы для обновления компонента, 
          посли изменения состояния хранилища 
        */

        const { store } = this.props
        console.log(store);
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

        this.state = {display: false};

    }
  componentDidMount(){
    //alert('xx');
  }

  render() {
      return <div>
                <div class='index-container'>
                      <div onClick={()=>{
                      this.props.store.dispatch(
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
                      this.props.store.dispatch(
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
                        alert('sadasd');
                      this.props.store.dispatch(
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

                 <Switcher store={this.props.store} page={this.props.store.getState().switcher.page}/>

            </div>
  }
}

function Mlenu(props){
  console.log(props);
  
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