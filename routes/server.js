const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');

const app = express();

var indexHtml = path.join(__dirname+'/../index.html');

app.get('/', function(req, res) {
  console.log('/');
  res.writeHeader(302, {
    location: '/home'
  });
  res.end();
});

app.get('/home', function(req, res) {
  console.log('/home');
  console.log(indexHtml);
  res.sendFile(indexHtml);
});

app.get('/aboutUs', function(req, res) {
  console.log('/aboutUs');
  res.sendFile(indexHtml);
});

app.get('/parallumEncodedBeads', function(req, res) {
  console.log('/parallumEncodedBeads');
  res.sendFile(indexHtml);
});

app.get('/instruments', function(req, res) {
  console.log('/instruments');
  res.sendFile(indexHtml);
});

app.get('/applications', function(req, res) {
  console.log('/applications');
  res.sendFile(indexHtml);
});

app.get('/team', function(req, res) {
  console.log('/team');
  res.sendFile(indexHtml);
});

app.get('/contactUs', function(req, res) {
  console.log('/contactUs');
  res.sendFile(indexHtml);
});

app.post('/contactUs', function(req, res) {
  console.log('/contactUs');
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'lanmenglemon@gmail.com',
      pass: ''
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'lanmenglemon@gmail.com',
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.send(error);
    }
    else {
      res.send('success');
      res.sendFile(indexHtml);
    }
  });
});

module.exports = app;
