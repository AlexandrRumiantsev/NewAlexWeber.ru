import React, { Component } from 'react'
import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'

import '../styles/body/menu.scss';

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
      return <div id='index'>
                <div class='menu'>
                  <span class='menu__login'>
                    { this.props.store.getState().user.User.log }
                  </span>
                </div>
                <div onClick={()=>{
                        this.props.store.dispatch(
                            {
                              type: 'projects', 
                              val: 'projects'
                            }
                        )
                      }} class='index-container'>
                      <div 
                      
                      class='index-container__item'>
                      <i class="far-projects fa-calendar-check"></i>
                      <p>Проекты</p>
                      </div>
                </div>

                <div onClick={()=>{
                      this.props.store.dispatch(
                            {
                              type: 'papers', 
                              val: 'papers'
                            }
                        )
                      }} class='index-container'>
                      <div 
                      class='index-container__item'>
                      <i class="far-papers"></i>
                      <p>Статьи</p>
                      </div>
                </div>

                <div onClick={()=>{
                      this.props.store.dispatch(
                            {
                              type: 'comments', 
                              val: 'comments'
                            }
                        )
                      }} class='index-container'>
                      <div 
                      class='index-container__item'>
                      <i class="far-comments"></i>
                      <p>Комментарии</p>
                      </div>
                </div>

                 <Switcher store={this.props.store} page={this.props.store.getState().switcher.page}/>

            </div>
  }
}