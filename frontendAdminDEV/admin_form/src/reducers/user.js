import { getUser } from '../actions/UserActions.js'

const initialState = {
    User : ''
  }
  
  export default function user(state = initialState , actions , store) {
    switch(actions.type){
        	case "LoginUser":
        	getUser(state , actions.val , actions.store );
            return state;
    	break;
    	case "SetUser":
            actions.val.callback(actions.val);
    		return Object.assign({}, state, {
             User: actions.val
        	})
    	break;
    	default:
    		return state;
    	break;

    }
  }