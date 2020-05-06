import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';
import { connect } from 'react-redux';
import axios from 'axios';

import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';

 class Papers extends Component {
  constructor () {

        super(...arguments);
        
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

  }
  componentDidMount(){
    const { store } = this.props
    getPapers(this , store)

  }
  componentWillUnmount(){
    //this.state.papers.status = true;
  }
  render() {
  	const { store } = this.props
    
    if(this.state.papers.data){
      console.log(this.state.papers)
      return <div>
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
                    {console.log(this.state.papers.data)}
       {
          this.state.papers.data.map((papers, index)=> {
                return <li key={index}>
                  <div>title is: {papers.title}</div>
                  <div>img is: {papers.img}</div>
                  <div>link is: {papers.link}</div>
                  <div>discription is: {papers.discription}</div>
                  <div>Mugger ID is: {papers._id}</div>
                </li>
              })}
      </div>
    }else{
      return <div>
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
    <span>PAPEr</span>
    
    </div>
    }
    
  }
}
const mapStateToProps = state => {
  return {
    papers: state.papers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getTest(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Papers)




