var mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
          _id: String,
          time: String,
          user: String,
          title: String,
          paper: String
        });
        
const Comments = mongoose.model('comments', commentsSchema)
        
module.exports = Comments;