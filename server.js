var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers['x-forwarded-proto'] !== 'https')
          // the statement for performing our redirection
          return res.redirect('https://' + req.headers.host + req.url);
      else
          return next();
  } else
      return next();
});

var port = process.env.PORT || 5000;
app.use(history()).listen(port);
console.log('server started '+ port);
