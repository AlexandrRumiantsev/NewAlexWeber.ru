import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { connect } from 'react-redux';
import { getComments } from '../actions/CommentsActions.js';

class Comments extends Component {
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
  componentDidMount(){

    getComments(this)

  }
  render() {
  	const { store } = this.props
    if(this.state.status == true){
      return  <div>
      <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='item__close'>
                    Закрыть
                    </div>
                    {this.state.comments.map((comments, index)=> {
                      return <li key={index}>
                        <div>title is: {comments.title}</div>
                         <div>paper is: {comments.paper}</div>
                          <div>_id is: {comments._id}</div>
                           <div>user is: {comments.user}</div>
                      </li>
                    })}
              </div>
            
    }else{
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
}


const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getComments(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Comments)