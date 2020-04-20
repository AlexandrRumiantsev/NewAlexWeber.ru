import { combineReducers } from 'redux'
import switcher from './switcher';
import main from './main';
import user from './user';


export default combineReducers({
  main,
  user,
  switcher
})