const express = require('express');
const path = require('path');

const coockieParser = require('cookie-parser');

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.use(coockieParser());
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;