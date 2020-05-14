import { EditProject } from  './EditProject.js';
import { EditPapers } from  './EditPapers.js';

export default class Form{
   constructor(type , data , store) {
     switch(type){
     	case 'EditProject':
     			return EditProject(data);  
     		break;
     	case 'EditPapers':
     			return EditPapers(data , store);  
     		break;	
     	default:
     		break
     }
  }
}



