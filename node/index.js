const { response } = require("express");
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'dbdesafio',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

app.get("/", (req, res) => {
    let sql = `insert into people (name) values ('Thyago');`;
    let connection = mysql.createConnection(config);
    connection.query(sql, function (err, rows, fields) {
      if (err)
        console.log(`Insert -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
    });
    connection.query(`select id,name from people`, function (err, rows, fields) {
      if (err) {
        console.log(`Select -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
      }
  
      let table = "<table border: 1px solid black;";
      table += "<tr><th>#</th><th>Name</th></tr>";
      for (let people of rows) {
        table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
      }
  
      table += "</table>";
      res.send("<h1>Full Cycle Rocks!</h1>" + table);
      if (err) console.log("Connection result error ->" + err.code);
    });
    connection.end();
  });
  

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})