const mongoose = require('mongoose');

const  TipsSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,'Please add Title']
  },
  details:{
    type:String,
    required:[true,'Please add Details']
  },
  application:{
    type: mongoose.Schema.ObjectId,
    ref:'Application',
    required: true
  }
})


module.exports = mongoose.model('Tips',TipsSchema);