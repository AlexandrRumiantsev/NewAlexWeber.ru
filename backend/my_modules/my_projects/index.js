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
       
       var connect;
       if(!connect)  connect = this.connect(res);
       
       return projectSchem.find({}, function(err, data) {
             res.setHeader('Access-Control-Allow-Origin', '*');
             res.send(data);
       });
        
   }           

    
}
module.exports = projects;