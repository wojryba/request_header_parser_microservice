var express = require("express");
var UAParser = require('ua-parser-js');

//https://github.com/florrain/locale
var locale = require("locale");

var ipaddr = require('ipaddr.js');


var app = express();
app.enable('trust proxy');
var port = process.env.PORT || 3000;

app.get('/', function(req, res){

  //get the OS
  var parser = new UAParser();
  var ua = req.headers['user-agent'];
  var c = parser.setUA(ua).getOS();

  //get Language
  var l = locale.Locale["default"];

  //get ip
  var ip = req.ip;
  ip = ipaddr.process(ip);
  ip = ip.toString();

  //formulate an answer and sent it
  var resObj = {
    "ipaddress": ip,
    "language": l,
    "software": c.name +" "+ c.version
  };
  res.send(resObj);
})

app.listen(port);
