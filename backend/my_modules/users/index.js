function users() {
    const mongoose = require("mongoose");
    const userSchem = require('./Schema.js');
    
  
   this.users_model = function(res) { 
       
       /**
       const login = "Admin";
       const password = "6Exniskay20"; 
       **/
       console.log('res');
       const login = res['req']['query']['login'];
       const password = res['req']['query']['password'];
       //console.log(res['req']['res']);
       
              
       return userSchem.find({'login': login , 'password': password}, (err, data) => {
              
              
              
              res.send(data);
              
       });
       
   }
   
    
}
module.exports = users;