function papers() {
    const mongoose = require("mongoose");
    const papersSchem = require('./Schema.js');
    const ObjectID = require('mongodb').ObjectID;
  
   this.papers_model = function(res) { 
       
       return papersSchem.find({}, (err, data) => {
           
             res.setHeader('Access-Control-Allow-Origin', '*');
             console.log(data);
             res.send(data);
            
       });
        
   }

   this.upp_papers = function(res , data) { 

     papersSchem.updateOne({"title":  data.title} , 
        {$set:
            {
                _id: data._id, 
                title: data.title, 
                discription : data.discription,
                link: data.link,
                img: data.img
            }
        },
        function (err , success) {
            if (err) throw (err);
             else {
                console.log('1upp success!')
            }
        })

      /*
      Заготовка для добавления
      papersSchem.find({'title': data.title}, (err, datas) => {
         if(err){
             consol.log(err);
         }else{
             console.log(data.title);
             let paper = new papersSchem();
             paper._id = data._id;
             paper.title = data.title;
             paper.discription = data.discription;
             paper.save(function(err) {
                if(!err) {
                    console.log("title " + paper.title );
                }
                else {
                    console.log(err);
                }
            });
         }
      });
      */

    /*   
    return papersSchem.find({}, (err, data) => {
        
          res.setHeader('Access-Control-Allow-Origin', '*');
          console.log(data);
          res.send(data);
         
    });*/
     
}
   
   
       
}
module.exports = papers;