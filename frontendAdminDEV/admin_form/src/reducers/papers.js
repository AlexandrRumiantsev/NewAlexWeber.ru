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
      case "PERSONS_FETCH_DATA_SUCCESS":
      console.log('!!PERSONS_FETCH_DATA_SUCCESS!!');
            return action.persons;
       break; 
      default:
        console.log('TEST3')
        return state;
      break;

    }
 
  }