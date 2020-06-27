const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan')
const connectDB = require('./config/db')

const ErrorHandler = require('./middlewares/error')

//Routes Files
const applications = require('./routes/applications')
const moreAppRouter = require('./routes/moreApps')

//Create express applications
const app = express();

//Load enf file to prossess.env
dotenv.config({
  path:'./config/config.env'
})

//create data base connection
connectDB();


//middlewares
app.use(cors())
app.use(express.json());

//logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount Routers 
app.use('/api/v1/applications', applications)
app.use('/api/v1/moreApps', moreAppRouter)

//Error Handler midleware
app.use(ErrorHandler)

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV
const server = app.listen(PORT,console.log(`SERVER RUNNING IN ${NODE_ENV} MODE ON PORT ${PORT}`))

//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
  console.log(`error: ${err}`);
  server.close(()=> process.exit(1));
})