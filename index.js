// var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
var macaddress = require('macaddress')
// macaddress.one(function (err, mac) {
//   console.log('Mac address for this host: %s', mac)
// })
var data = []
macaddress.all(function (err, all) {
  // console.log(JSON.stringify(all, null, 2))
  // data.push(JSON.stringify(all, null, 2))
  console.log(all)
  data.push(all)
})
app.get('/data', function (req, res) {
  res.send(data)
})
// mongoose.connect('mongodb://localhost:27017/db_test')
// var data = require('./data.route.js')
// app.use('/api/data', data)
// connect zone port//
var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
