function papers() {
    const mongoose = require("mongoose");
    const papersSchem = require('./Schema.js');
    
  
   this.papers_model = function(res) { 
       
       return papersSchem.find({}, (err, data) => {
           
             res.setHeader('Access-Control-Allow-Origin', '*');
             console.log(data);
             res.send(data);
            
       });
        
   }
   
   
       
}
module.exports = papers;