//Express server is used to route the form submited
//print the input details
const express = require('express');
const server = express();
//const path = require("path");
// const hostname = '127.0.0.1';
const port = 8080;
var bodyParser= require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true}));
//app.use(bodyParser.urlencoded({ extended: false}));
// .get('/', function(req, res){
//      res.sendFile(path.join(__dirname + "/index.html"));
// });
server.post('/submit', function(req, res) {
  res.status(200);
  res.write('Name:'+req.body.Name+'\n');
  res.write('Email:'+req.body.Email+'\n');
  res.write('Message:'+req.body.Message+'\n');
  res.end();
//  console.log(req.body);
});
// server.get('/submit', function(req, res) {
//     res.status(200);
//     res.write('Name:'+req.query.Name+'\n');
//     res.write('Email:'+req.query.Email+'\n');
//     res.write('Message:'+req.query.Message+'\n');
//     res.end();
//     console.log(req.body);
//    });
// server.listen(port);
server.listen(port, function () {
    console.log('Node server is running');
   });