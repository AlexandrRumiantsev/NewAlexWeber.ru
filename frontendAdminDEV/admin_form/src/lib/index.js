import form from './form';
import file from './file';
import Material from './material';

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