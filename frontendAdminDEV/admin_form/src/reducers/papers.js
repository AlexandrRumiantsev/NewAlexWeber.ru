import { createStore } from 'redux'
import { getPapers } from '../actions/PapersActions.js'

  const initialState = {
    data: [],
    status: false
  }
  

  export default function papers(state = initialState , actions) {

    switch(actions.type){
      case "getPapersAll":
        console.log("getPapersAll");
        getPapers(state , actions.val);
        return state;
      break;
      case "setPapers":
        console.log("setPapers");
        console.log(actions);
        return Object.assign({}, state, {
            data: actions.val,
            status: true
        })
      break; 
      default:
        return state;
      break;

    }
 
  }