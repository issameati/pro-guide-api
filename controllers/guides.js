const Guide = require('../models/Guide')

//@Description Get All Guides Of a specific App 
exports.getGuides = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const resault = await Guide.find({application:appId}).populate('application')
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}

//@Description Get All Guides Of a specific App 
exports.createGuide = async (req,res,next)=>{
  try {
    const appId = req.params.appId;
    const body = req.body;
    const newGuide = {
      ...body,
      application:appId
    }
    const resault = await Guide.create(newGuide)
    res.status(200).json({
      sussess:true,
      resault
    })
  } catch (error) {
    return next(error)
  }
}
