const mongoose = require('mongoose');

const  TricksSchema = new mongoose.Schema({
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


module.exports = mongoose.model('Tricks',TricksSchema);