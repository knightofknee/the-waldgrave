var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.enable('trust proxy')

app.use(function(request, response, next) {

  if (process.env.NODE_ENV != 'development' && !request.secure) {
     return response.redirect("https://" + request.headers.host + request.url);
  }
  next();
})

var port = process.env.PORT || 5000;
app.use(history()).listen(port);
console.log('server started '+ port);
