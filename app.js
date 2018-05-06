var express = require('express');
var path = require('path');

var indexRouter = require('./routes/server');

var app = express();

// app.set('port', process.env.PORT || 80);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);

// app.listen(app.get('port'));

module.exports = app;
