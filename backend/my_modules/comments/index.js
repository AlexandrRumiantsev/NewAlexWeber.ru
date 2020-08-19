function comments() {
    const mongoose = require("mongoose");
    const commentsSchem = require('../Schems/Comments.js');
    

    this.makeid = function() {
        var text = "";
        var possible = "55153a8014829a865bbf700d";
    
        for( var i=0; i < 12; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }
    this.comments_del = function(title , config) { 
       
       commentsSchem.deleteOne({ title: title }, function (err , data) {
        if (err)  console.log('Not Save: ' + err);
          console.log('Save');
          console.log(data);
        });
    }
   this.comments_model = function(data) { 
         var dataForm = data;
         var id = mongoose.Types.ObjectId(this.makeid());
         console.log(dataForm);
         var item = new commentsSchem({ _id: id, title: dataForm.title , user: dataForm.user , paper: dataForm.paper });
         item.save(function (err) {
            if (err) return console.log(err);
         });
   }
   this.comments_del = function(id ,config) { 
       config.connect();
       var query = { '_id': id };
        commentsSchem.deleteOne(query, function (err, result) {
        if (err) {
            console.log("error query");
        } else {
            console.log(result);
        }

    });    
   }
   this.get_all_comments = function(res) {
       return commentsSchem.find({}, (err, data) => {
           
             res.setHeader('Access-Control-Allow-Origin', '*');
             console.log(data);
             res.send(data);
            
       });
   }
   
   
       
}
module.exports = comments;