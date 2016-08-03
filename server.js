var express = require('express')
var bodyParser = require('body-parser')

path = require('path');
mongoose = require('mongoose');
app = express();

app.use(express.static(path.join(__dirname, './client')))
app.use(bodyParser.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')()

app.listen(7777, function(){
  console.log('******7777******')
})
