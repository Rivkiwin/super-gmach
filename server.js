var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(express.static('./dist/super-gmach'));
// app.use(serveStatic(path.join(super-gmach, 'dist')))
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/super-gmach/'}
);
});
// var port = process.env.PORT || 8000
// app.listen(port)
app.listen(process.env.PORT || 8080);
console.log('server started ' + port)