var express = require('express');
var path = require('path');

var indexRouter = require('./routes/server');

var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000);

module.exports = app;