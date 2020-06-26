const Tricks = require('../models/Tricks')

//@Description Get All Guides Of a specific App 
exports.getTricks = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const resault = await Tricks.find({application:appId}).populate('application')
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}

//@Description Get All Guides Of a specific App 
exports.createTricks = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const body = req.body;
    const newTrick = {
      ...body,
      application:appId
    }
    const resault = await Tricks.create(newTrick)
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}
