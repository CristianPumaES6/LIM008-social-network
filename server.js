var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(express.static('src'));
app.listen(3000)