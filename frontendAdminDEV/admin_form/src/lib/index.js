import form from './form';
import file from './file';
import Material from './material';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const liba = {
	'form': {
		'create': function(type , data , store){
			return new form(type , data , store);
		}
	},
	'file' : {
		'create': function(){
			return new file;
		}
	},
	'materialUI' : {

		'paperAddPopap': function(store){
			new Material('paperAddPopap' , store)
		}
	}
}