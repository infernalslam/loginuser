;(function () {
  'use strict'
  var modelName = 'data'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema
  var schema = new Schema({
    Username: String,
    Password: String,
    Mac_address: String
  })
  module.exports = mongoose.model(modelName, schema)
})()
