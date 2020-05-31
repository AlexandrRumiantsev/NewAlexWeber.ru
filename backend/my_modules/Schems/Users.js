var mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
          _id: String,
          id_group: String,
          name: String,
          login: String,
          password: String,
          image: String
        });
module.exports = mongoose.model('users', usersSchema);

