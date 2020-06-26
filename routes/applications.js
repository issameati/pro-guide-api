const express = require('express');
const guidesRouter = require('./guides')
const tipsRouter = require('./tips')
const tricksRouter = require('./tricks')

const {
  getAllApplications,
  createApplication,
  getSingleApplications
} = require('../controllers/applications')


const Router = express.Router();

//Reroute to other router resourses
Router.use('/:appId/guides', guidesRouter)

//Reroute to other router resourses
Router.use('/:appId/tips', tipsRouter)

//Reroute to other router resourses
Router.use('/:appId/tricks', tricksRouter)
Router.route('/')
  .get(getAllApplications)

Router.route('/:appId')
  .get(getSingleApplications)


Router.route('/create')
  .post(createApplication)
module.exports = Router
