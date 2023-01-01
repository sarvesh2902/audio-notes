const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AudioUrlRecordSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    record:[{
      type: String
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

module.exports = mongoose.model('audioUrlRecordContents', AudioUrlRecordSchema);