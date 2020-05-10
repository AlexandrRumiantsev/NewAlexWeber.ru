import { EditProject } from  './EditProject.js';

export default class Form{
   constructor(type , data) {
     switch(type){
     	case 'EditProject':
     		return EditProject(data);  
     		break;
     	default:
     		break
     }
  }
}



