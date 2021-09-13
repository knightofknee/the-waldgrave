var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/.well-known/acme-challenge/sJ6wHrFRc81C9_XJGEWXsiOupFuGXYYJlIYOrCmXims', (req, res) => {
  res.send(`sJ6wHrFRc81C9_XJGEWXsiOupFuGXYYJlIYOrCmXims.qrcQEr-yX_-d1mMWDJ7MxPeZpMknbyClWtwLuisGXV4`)
});

app.get('/test', (req, res) => {
  res.send(`wooo`)
});

var port = process.env.PORT || 5000;
app.use(history()).listen(port);
console.log('server started '+ port);
