var mongoose = require('mongoose');

const papersSchema = mongoose.Schema({
          /*_id: String,*/
          title: String,
          discription: String,
          link: String,
          img: String
        });
        
const Papers = mongoose.model('papers', papersSchema)
        
module.exports = Papers;