// server.js
// where your node app starts

// init project
var express = require('express');
var request = require('request');
var concat = require('concat-stream');
var url = require('url');
var zlib = require('zlib');


var app = express();

app.use(express.static('public'));


app.get("/proxy", function (req, response, next) {
  var headers;
  var write = concat(function(proxres) {
    if (!headers['content-type']) {
      console.log(proxres);
    }
    if ((headers['content-type']).indexOf('html') > 0) {
      if (headers['content-encoding']==='gzip') {
        proxres = zlib.gunzipSync(proxres);
      }
      var resstr = proxres.toString();
      if (resstr.indexOf('</head>') > 0) {
        proxres = resstr.replace('</head>','<script src="/mutation-summary.js"></script><script src="/nuclear-reset.js"></script></head>');
        // .replace('</head>','<link rel="stylesheet" href="/nuclear-reset.css"></head>');
      }
      if (headers['content-encoding']==='gzip') {
        proxres = zlib.gzipSync(proxres);
      }
    }
    response.end(proxres);
  });
  var url = req.query.url;
  if (url) {
    if (!url.match(/^https?:\/\//)) {
      response.redirect("/proxy?url=http://"+url);
      return;
    }
    request(url)
      .on('response',function (proxres) {
            headers = proxres.headers;
            response.writeHead(proxres.statusCode, proxres.headers);
          })
      .on('error', function(err) {
          console.log(err)
        })
      .pipe(write);
  } else {
    next();
  }
});


app.get("/*", function (req, response, next) {
  var ref = req.get("Referrer") && url.parse(req.get("Referrer"),true).query.url;
  if (ref) {
    var resolved = url.resolve(ref,req.path);
    response.redirect("/proxy?url="+resolved);
  } else {
    next();
  }
});

app.get("/*", function (req, response) {
  response.sendFile(__dirname + '/views/enter-url.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});