const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const documents = require('./routes/documents');

app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/documents', documents);

http.createServer(app).listen(3000);

module.exports = app;
