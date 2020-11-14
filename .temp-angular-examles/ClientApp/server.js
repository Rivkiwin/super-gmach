const express = require('express');
//const path = require('path');
const app = express();
require('module-alias/register');


// Serve static files....
app.use(express.static(__dirname + 'dist/super-gmach'));

// Send all requests to index.html
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);

});

// default Heroku PORT
app.listen(process.env.PORT || 8080);
