import form from './form';
import file from './file';

export const liba = {
	'form': {
		'create': function(type , data){
			return new form(type , data);
		}
	},
	'file' : {
		'create': function(){
			return new file;
		}
	}
}