var mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
          _id: String,
          id_group: String,
          name: String,
          title: String,
          discription: String,
          image: String,
          imageFull: String
        });
module.exports = mongoose.model('project', projectSchema);