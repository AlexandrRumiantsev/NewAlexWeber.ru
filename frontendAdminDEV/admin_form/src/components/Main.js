
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import {createStore} from 'redux';




export default class Main extends Component {
  constructor(props) {
        super(props);
        console.log(this.props.store);
  }
  render() {
    return <div class='index-container'>
    
            <div onClick={()=>{
                //console.log(this.props.store.dispatch('SET_PAGE'))
                 //this.props.store.dispatch({type: 'SET_PAGE' , val: 'projects'});
                  this.props.store.dispatch(
                    {type: 'projects' , val: 'projects'}
                  )
              }
            }
                 class='index-container__item'>
              Проекты
            </div>
            <div onClick={()=>{alert('sad')}}
                 class='index-container__item'>
              Статьи
            </div>
            <div  onClick={()=>{alert('sad')}}
                  class='index-container__item'>
              Комментарии
            </div>
      </div>
  }
}

/*
Main.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}*/

