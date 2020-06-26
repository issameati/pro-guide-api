const express = require('express');

const {
  getTips,
  createTips
} = require('../controllers/tips')

const Router = express.Router({
  mergeParams: true
});

Router.route('/')
  .get(getTips)
Router.route('/create')
  .post(createTips)

module.exports = Router;