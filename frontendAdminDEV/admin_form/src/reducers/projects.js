import { createStore } from 'redux'
import { getProjects } from '../actions/ProjectsActions.js'

  const initialState = {
    data: []
  }
  
function listProject(props) {
  
}

  export default function switcher(state = initialState , actions) {

    switch(actions.type){
      
      case "getProjectsAll":
         getProjects(state , actions);
        return state;
      break;

      default:
        return state;
      break;

    }
 
  }