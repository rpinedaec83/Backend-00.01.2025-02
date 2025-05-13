const mysql = require('mysql2');
require('dotenv').config();

const con = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    database:process.env.MYSQLBBDD
});

con.connect((err)=>{
    if(err) throw err;
    let sql = "create table if not exists message(id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(2550), user VARCHAR(250))";
    con.query(sql,(err, result)=>{
        if(err) throw err;
    });
    sql = "create table if not exists login(id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(250) unique, password VARCHAR(250))";
    con.query(sql,(err, result)=>{
        if(err) throw err;
    })
});

module.exports = con;