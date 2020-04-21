import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

export default class Comments extends Component {
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
  render() {
  	const { store } = this.props
    return <h1>
    <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Закрыть
                    </div>
              </div>
    <span>COMMENTS</span>
    </h1>
  }
}