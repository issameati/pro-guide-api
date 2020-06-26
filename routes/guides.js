const express = require('express');

const {
  getGuides,
  createGuide
} = require('../controllers/guides')

const Router = express.Router({
  mergeParams: true
});

Router.route('/')
  .get(getGuides)
Router.route('/create')
  .post(createGuide)

module.exports = Router;