const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');

var indexHtml = path.join(__dirname+'../../../client/dist/index.html');

module.exports = app => {

  app.get('/', function(req, res) {
    res.writeHeader(302, {
      location: '/home'
    });
    res.end();
  });

  app.get('/home', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/aboutUs', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/parallumEncodedBeads', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/instruments', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/applications', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/team', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.get('/contactUs', function(req, res) {
    res.sendFile(indexHtml);
  });

  app.post('/contactUs', function(req, res) {
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
}
