var express = require("express");
var UAParser = require('ua-parser-js');

//https://github.com/florrain/locale
var locale = require("locale");

var ipaddr = require('ipaddr.js');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){

  var parser = new UAParser();
  var ua = req.headers['user-agent'];
  var c = parser.setUA(ua).getOS();
  var l = locale.Locale["default"];
  var ip = req.ip;
  ip = ipaddr.process(ip);
  ip = ip.toString();
  var resObj = {
    "ipaddress": ip,
    "language": l,
    "software": c
  };
  res.send(resObj);
})

app.listen(port);
