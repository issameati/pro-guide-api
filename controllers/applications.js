const Application = require('../models/Application')

exports.getAllApplications = async (req,res,next) => {
  try {
    const apps = await Application.find();
    res.status(200).json({
      success:true,
      msg:'List of the All the Apps Exits',
      apps
    })
  } catch (error) {
    return(next(error));
  }
}

exports.getSingleApplications = async (req,res,next) => {
  try {
    const appId = req.params.appId

    const resault  = await Application.find({packageName:appId})
      .populate('guides')
      .populate('tips')
      .populate('tricks');

    // Band.find({}).populate('members').exec(function(error, bands) {
    //   /* `bands.members` is now an array of instances of `Person` */
    // });
    res.status(200).json({
      success:true,
      msg:'specific app and Their Details',
      resault
    })
  } catch (error) {
    return(next(error));
  }
}



exports.createApplication =async (req,res,next) => {
  const newApp = {
    ...req.body
  };
  console.log(newApp);
  try {
    const app = await Application.create(newApp)
    res.status(200).json({
        success:true,
        msg:'Created successfully',
        app
      })
  } catch (error) {
     return next(error);
  }
  
}