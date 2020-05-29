import { createStore } from 'redux'
import { getProjects } from '../actions/ProjectsActions.js'

  const initialState = {
    data: []
  }
  


  export default function switcher(state = initialState , actions) {

    switch(actions.type){
      
      case "getProjectsAll":
         getProjects(state , actions);
        return state;
      break;
      case "setProjects":
        return Object.assign({}, state, {
               data: actions.val,
               status: true
        })
      break;
      case "getProjectItem":
        console.log('getProjectItem');
        return Object.assign({}, state, {})
      break;
      default:
        return state;
      break;

    }
 
  }