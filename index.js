const http = require('http');
const mysql = require("mysql2");
  

const hostname = '127.0.0.1';
const port = 3000;

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
      console.log("Successful connect");
    }
 });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('���� ���\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});