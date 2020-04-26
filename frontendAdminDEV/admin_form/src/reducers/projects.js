import { createStore } from 'redux'
import { getProjects } from '../actions/ProjectsActions.js'

  const initialState = {
    data: []
  }
  
function listProject(props) {
  
}

  export default function switcher(state = initialState , actions) {

    switch(actions.type){
      case "setProjectsAll":
        console.log("setProjectsAll");
        getProjects(state , actions.val);
        return state;
      break;

      case "getProjectsAll":
        console.log("getProjectsAll");
        return state.data;
      break;

      
      default:
        console.log('TEST3')
        return state;
      break;

    }
 
  }