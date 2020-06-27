const mongoose  = require('mongoose');

const MoreAppSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  icon:{
    type:String,
    required:true
  },
  packageName:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('MoreApp',MoreAppSchema);