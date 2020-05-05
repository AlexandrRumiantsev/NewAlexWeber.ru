
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import {createStore} from 'redux';




export default class Main extends Component {
  constructor(props) {
        super(props);
  }
  render() {
    return <div class='index-container'>
    
            <div onClick={()=>{
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

