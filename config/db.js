const mongoose = require('mongoose');


const connectDB = async ()=>{

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
       useNewUrlParser: true,
       useCreateIndex: true });
    console.log(`DATABASE CONNECTED`)
  } catch (error) {
     console.log(`OPPS DB NOT CONNECTED ${error}`)
    }
  // try {
  //   const cnx = await mongoose.createConnection(process.env.MONGO_URI,{
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true
  //   })
  //   console.log(`DB CONNECTED: PORT ${cnx.host}`)
    
  // } catch (error) {
  //   console.log(`OPPS DB NOT CONNECTED ${error}`)
  // }
 
}

module.exports = connectDB