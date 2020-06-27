const express = require('express')

const {
  getMoreApps,
  createMoreApp
} = require('../controllers/moreApp')
const Router = express.Router();

Router.route('/')
  .get(getMoreApps)

Router.route('/create')
  .post(createMoreApp)

module.exports = Router;