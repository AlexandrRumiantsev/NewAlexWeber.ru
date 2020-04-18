function comments() {
    const mongoose = require("mongoose");
    const commentsSchem = require('./Schema.js');
    
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
    this.makeid = function() {
        var text = "";
        var possible = "55153a8014829a865bbf700d";
    
        for( var i=0; i < 12; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }

   this.comments_model = function(data) { 
         var dataForm = data;
         var id = mongoose.Types.ObjectId(this.makeid());
         var item = new commentsSchem({ _id: id, title: dataForm.comment , user: dataForm.name , paper: dataForm.paper });
         item.save(function (err) {
            if (err) return console.log(err);
         });
   }
   
   
       
}
module.exports = comments;