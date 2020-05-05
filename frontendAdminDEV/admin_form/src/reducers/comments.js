import { createStore } from 'redux'
import { getComments , delComment} from '../actions/CommentsActions.js'

  const initialState = {
    data: [],
    status: false
  }
  

  export default function comments(state = initialState , actions) {

    switch(actions.type){
      case 'getComment':
          console.log('GET_COMMENTS_ALL');
          //getComments(state , actions);
          return state;
      break;
      default:
        return state;
      break;
    }
 
  }