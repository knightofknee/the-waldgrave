var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));

// app.get('/.well-known/acme-challenge/RhOO0oMxnE7HkNsxDhX5ldcdF4SIhMu3D0xte5XsoT4', (req, res) => {
//   res.send(`RhOO0oMxnE7HkNsxDhX5ldcdF4SIhMu3D0xte5XsoT4.qrcQEr-yX_-d1mMWDJ7MxPeZpMknbyClWtwLuisGXV4`)
// });

app.get('/test', (req, res) => {
  res.send(`wooo`)
});

var port = process.env.PORT || 5000;
app.use(history()).listen(port);
console.log('server started '+ port);
