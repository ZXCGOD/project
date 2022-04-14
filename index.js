const http = require('http');
const mysql = require("mysql2");
  
const routes = require('./routes/routes')
const express = require("express");

const app = express();
const hostname = '127.0.0.1';
const port = 3000;


routes(app);
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "project",
  password: ""
});
 connection.connect(function(err){
    if (err) {
      return console.error("Error" + err.message);
    }
    else{
      console.log("S1uccessful connect");
    }
 });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Imposter\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});