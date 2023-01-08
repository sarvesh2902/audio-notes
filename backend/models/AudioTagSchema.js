const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AudioTagSchema = new Schema({
    url:{
        type: String
    },
    email:{
        type: String
    },
    projectName:{
        type:String
    },
    tags:[{
      type: Object
    }],
    duration:{
      type: String
    },
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