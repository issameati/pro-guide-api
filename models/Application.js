const mongoose = require('mongoose');

const  ApplicationSchema = new mongoose.Schema({
  packageName:{
    type:String,
    required:[true,'Please add packageName'],
    unique:true
  },
  icon:{
    type:String,
    required: true
  },


}, {
  toJSON: {
      virtuals: true
  },
  toObject: {
      virtuals: true
  }
})
  //Reverse Populaton with virtuals
  ApplicationSchema.virtual('guides', {
    ref: 'Guide',
    localField: '_id',
    foreignField: 'application',
    justOne: false
})

ApplicationSchema.virtual('tips', {
  ref: 'Tips',
  localField: '_id',
  foreignField: 'application',
  justOne: false
})

ApplicationSchema.virtual('tricks', {
  ref: 'Tricks',
  localField: '_id',
  foreignField: 'application',
  justOne: false
})

module.exports = mongoose.model('Application',ApplicationSchema);