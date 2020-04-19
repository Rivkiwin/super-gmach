let express = require('express'),
    path = require('path');
var app = express();
var port = process.env.PORT || 8000;
let server = require('http').Server(server);

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

app.get('/blog.html', function(req, res,next){
    res.sendFile(path.join(__dirname+"/blog.html"));
});
server.listen(port, function() {
  console.log("App is running on port " + port);
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("App is running on port " + port);
});