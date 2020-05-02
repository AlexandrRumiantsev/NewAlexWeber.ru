const mongoose = require("mongoose");

module.exports = {
    'connect':function(){
        console.log('connect');
        
        mongoose.connect('mongodb://localhost:27017/server', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log('Подключение к Продовой БД');
                return db;
            }
        });
    },
    'connectDEV': function() {
        mongoose.connect('mongodb://localhost:27017/docker-node-mongo', {
            useNewUrlParser: true
        })
        .then(() => console.log('Подключение к Девовой БД'))
        .catch(err => console.log('ERROR:' + err));
    }
}    