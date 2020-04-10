function papers() {
    const mongoose = require("mongoose");
    const papersSchem = require('./Schema.js');
    
    this.connect = function(res) {
        console.log('connect');
       
        mongoose.connect('mongodb://localhost:27017/server', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log('222Подключение с БД установлено');
                return db;
                   
                                } 
                                
                            });
                        }
  
   this.papers_model = function(res) { 
       
       return papersSchem.find({}, (err, data) => {
           
             res.setHeader('Access-Control-Allow-Origin', '*');
             console.log(data);
             res.send(data);
            
       });
        
   }
   
   
       
}
module.exports = papers;