// var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// mongoose.connect('mongodb://localhost:27017/db_test')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
// var data = require('./data.route.js')
// app.use('/api/data', data)
// connect zone port//
var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
