const express = require('express');

const {
  getTricks,
  createTricks
} = require('../controllers/tricks')

const Router = express.Router({
  mergeParams: true
});

Router.route('/')
  .get(getTricks)
Router.route('/create')
  .post(createTricks)

module.exports = Router;