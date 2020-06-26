const Tips = require('../models/Tips')

//@Description Get All Guides Of a specific App 
exports.getTips = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const resault = await Tips.find({application:appId}).populate('application')
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}

//@Description Get All Guides Of a specific App 
exports.createTips = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const body = req.body;
    const newTips = {
      ...body,
      application:appId
    }
    const resault = await Tips.create(newTips)
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}
