function projects() {
    const mongoose = require("mongoose");
    const projectSchem = require('./Schema.js');
    
   
  
   this.projects_model = function(res , callback) { 
       
       return projectSchem.find({}, (err, data) => {
           
             res.setHeader('Access-Control-Allow-Origin', '*');
             callback(data);
            
       });
        
   }
   
   this.projects_del = function(res) {

        const name_project = res['req']['query']['name'];
        
        return projectSchem.deleteOne({'name': name_project}, (err, data) => {
             console.log('delete '+ name_project);
       });
       
   }
  
   this.projects_add = function(res , data) {
       console.log(data.name);
       
       const projectSchemaAdd = mongoose.Schema({
          _id: String,
          id_group: String,
          name: String,
          title: String,
          discription: String,
          image: String,
          imageFull: String
        });
        
        var Project = mongoose.model('projects', projectSchemaAdd);

        var ProjectObject = new Project({ 
                _id :  Math.floor(Math.random() * Math.floor(10000)) ,
                name :  data.name , 
                id_group :  data.id_group , 
                title : data.title , 
                discription:  data.discription , 
                image:  data.image , 
                imageFull: data.imageFull
        });
        
        ProjectObject.save();
        
    };
       
}
module.exports = projects;