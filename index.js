const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

require('./routes/server')(app);

// if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
// }

const PORT = process.env.PORT || 3000;
app.listen(PORT);
