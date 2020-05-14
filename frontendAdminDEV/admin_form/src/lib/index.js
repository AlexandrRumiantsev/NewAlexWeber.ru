import form from './form';
import file from './file';

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
	}
}