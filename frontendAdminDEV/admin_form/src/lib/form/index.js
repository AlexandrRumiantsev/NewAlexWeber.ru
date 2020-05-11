import { EditProject } from  './EditProject.js';
import { BasicTextFields } from  './EditPapers.js';

export default class Form{
   constructor(type , data) {
     switch(type){
     	case 'EditProject':
     			return EditProject(data);  
     		break;
     	case 'EditPapers':
     			return BasicTextFields(data);  
     		break;	
     	default:
     		break
     }
  }
}



