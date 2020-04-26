import { createStore } from 'redux'
import { getComments } from '../actions/CommentsActions.js'

  const initialState = {
    data: [],
    status: false
  }
  

  export default function comments(state = initialState , actions) {

    switch(actions.type){
      default:
        return state;
      break;
    }
 
  }