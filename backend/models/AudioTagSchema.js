const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AudioTagSchema = new Schema({
    url:{
        type: String,
        required: true,
        unique: true
    },
    tags:[{
      type: Object
    }],
    createdAt:{
         type: Date,
         default: Date.now
    },
    updatedAt:{
         type: Date,
         default: Date.now
    }
  });

module.exports = mongoose.model('audioTagContents', AudioTagSchema);