const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;
 
class BaseModel extends require("./Helper.js"){

    /*
      Примеры вызова
          * Список элементов:
              new BaseModel( require('./my_modules/comments/Schema.js') , 'getList' );
          * Получение элемента:
              new BaseModel( require('./my_modules/comments/Schema.js') , 'getItem' , 343638353466386136353038 );    
          * Удаление элемента:
              new BaseModel( require('./my_modules/comments/Schema.js') , 'delItem' , 343638353466386136353038);
          * Обновление элемента:
              let data = { 'title': '000', 'user': '000' , 'paper': '000'}
              new BaseModel( require('./my_modules/comments/Schema.js') , 'uppItem' , '313237343534623235303735' , data );
    */
    getField(type) {
        return this[type];
    }

    setField(type, value) {
        this[type] = value;
    }

    getList(res) {
        return this.schem.find({}, (err, data) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            console.log(data);
            res.send(data);
        });
    }

    getItem(query) {
        return this.schem.find(query, (err, data) => {
            console.log(data);
        })
    }

    delItem(query) {

        return this.schem.deleteOne(query, function(err, result) {
            if (err) {
                console.log("error query");
            } else {
                console.log(result);
            }
        })

    }

    upItem(query , setting) {
        return this.schem.updateOne(query, {
                $set: setting
            },
            function(err, success) {
                if (err) throw (err);
                else {
                    console.log('upp success!')
                }
            })
    }

    setSchem(type, value) {
        this[type] = value;
    }

    constructor(shem, type, id, data , res , setting) {
        super();
        this.schem = shem;
        if(id != ''){
            this.query = {
                    '_id': new ObjectID(id)
                };
        }
            
        switch (type) {
            case 'uppItem':
                console.log(this.query);
                this.upItem(this.query, setting);
                break;
            case 'delItem':
                this.delItem(this.query);
                break;
            case 'getList':
                this.getList(res);
                break;
            case 'getItem':
                this.getItem(this.query);
                break;
        }
    }

}

module.exports = BaseModel;