import form from './form';
import file from './file';
import Material from './material';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const globalData = {
	prevPage: '' ,
	page: ''
}
export const liba = {
	'routerState' : function(component) {
		const mutationObserver = new MutationObserver(function(mutations) {
			let text = window.location.pathname;
			component.setState({
		      display: text.substring(1).toLowerCase()
		    })
		});
		mutationObserver.observe(document, {
		  attributes: true,
		  characterData: true,
		  childList: true,
		  subtree: true,
		  attributeOldValue: true,
		  characterDataOldValue: true
		});
  		
	},
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