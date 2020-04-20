import { createStore } from 'redux'

  const initialState = {
    page: 'index'
  }
  
  const action = {
    
  }
  const mutations = {
     
  }

  export default function switcher(state = initialState , actions) {

    switch(actions.type){
    	case "projects":
    		//return {}, state, {page: actions.type}
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
    	case "papers":
    		//return {}, state, {page: actions.type}
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
    	case "comments":
    		//return {}, state, {page: actions.type}
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
    	default:
    		console.log('TEST3')
    		return state;
    	break;

    }
 
  }