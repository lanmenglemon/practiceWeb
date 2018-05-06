var express = require('express');
var path = require('path');

var indexRouter = require('./routes/server');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);

app.listen(8080);

module.exports = app;
