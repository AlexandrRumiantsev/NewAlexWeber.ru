function projects() {
    const mongoose = require("mongoose");
    const projectSchem = require('./Schema.js');
    
    this.connect = function(res) {
        console.log('connect');
       
        mongoose.connect('mongodb://localhost:27017/server', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log('Подключение с БД установлено');
                return db;
                   
                                } 
                                
                            });
                        }
  
   this.projects_model = function(res) { 
       
       return projectSchem.find({}, (err, data) => {
             res.setHeader('Access-Control-Allow-Origin', '*');
             res.send(data);
            
             console.log('connect close');
       });
        
   }
   
   this.projects_del = function(res) {
        //Пример удаления
        //http://alexweber.ru:5000/delete?name=TEST
        const name_project = res['req']['query']['name'];
        
        return projectSchem.deleteOne({'name': name_project}, (err, data) => {
             console.log('delete '+ name_project);
       });
       
   }

    
}
module.exports = projects;