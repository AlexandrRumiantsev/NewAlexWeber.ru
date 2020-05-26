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
            //actions.val.callback(actions.val);
            console.log('!!!actions!!!');
            console.log(actions.val.log);
             console.log('!!!actions!!!');
    		return Object.assign({}, state, {
             User: {
               login : actions.val.log ,
               password : actions.val.pass
             }
        	})
    	break;
    	default:
    		return state;
    	break;

    }
  }