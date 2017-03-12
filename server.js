var express = require("express");
var UAParser = require('ua-parser-js');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){

  var parser = new UAParser();
  var ua = req.headers['user-agent'];
  var c = parser.setUA(ua).getOS();
  var resObj = {
    "ipaddress": null || req.headers['X-Forwarded-For'],
    "language": null || req.headers['Content-Language'],
    "software": c
  };
  console.log(resObj);
  res.send(resObj);
})

app.listen(port);
