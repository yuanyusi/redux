var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);
var webpackHotMiddleware = require("webpack-hot-middleware");

 //cors and preflight filtering 
 /*app.all('*', function(req, res, next){.. //preflight needs to return exact request-header 
 res.set('Access-Control-Allow-Headers', 
 req.headers['access-control-request-headers']);
 if ('OPTIONS' == req.method) return res.send(204);next(); });
 */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true,
  filename: 'bundle.js',
  stats: {
    colors: true,
  },
 // historyApiFallback: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});


