// *******************************************************
// expressjs template
//
// assumes: npm install express
// defaults to jade engine, install others as needed
//
// assumes these subfolders:
// public/
// public/javascripts/
// public/stylesheets/
// views/
//
var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('error-handler');

var routes = require('./routes');
var fs = require('fs');

// Configuration
// app.use(morgan);
// app.use(bodyParser);
// app.use(methodOverride);
//app.use(express.static(__dirname + '/public'));
app.use(errorHandler);

function start() {
    routes.setup(app);
    var host = process.env.IP;
    var port = process.env.PORT;
    app.listen(port, host);
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}

exports.start = start;
exports.app = app;