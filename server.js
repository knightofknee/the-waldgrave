var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var enforce = require('express-sslify');
var http = require('http');
const history = require('connect-history-api-fallback');

app = express();

app.use(enforce.HTTPS());



app.use(serveStatic(__dirname + "/dist"));

// app.enable('trust proxy')

// app.use(function(request, response, next) {

//   if (process.env.NODE_ENV != 'development' && !request.secure) {
//      return response.redirect("https://" + request.headers.host + request.url);
//   }
//   next();
// })
app.use(history())

var port = process.env.PORT || 5000;

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
// app.use(history()).listen(port);

// console.log('server started '+ port);
