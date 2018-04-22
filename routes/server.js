const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

console.log("node start");

module.exports = app => {
  app.post('/contact', function(req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'lanmenglemon@gmail.com',
        pass: 'pyloioscowbdsseo'
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
        // res.;
        res.send(error);
      }
      else {
        res.send('success');
      }
    });
  });
}
