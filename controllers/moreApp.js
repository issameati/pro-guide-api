const MoreApp = require('../models/MoreApp')

exports.getMoreApps = async (req,res,next)=>{
   try {
     const resaults = await MoreApp.find();
     res.status(200).json({
       success:true,
       resaults
     })
   } catch (error) {
     next(error);
   }
}

exports.createMoreApp = async (req,res,next)=>{
  try {
    const newApp = req.body
    const resaults = await MoreApp.create(newApp);
    res.status(200).json({
      success:true,
      resaults
    })
  } catch (error) {
    next(error);
  }
}