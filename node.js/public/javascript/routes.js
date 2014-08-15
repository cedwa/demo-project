var config = require('./config');
var db = require('./dbwrapper');
var mongoose = require('mongoose');

function setup(app) {
    app.get('/api/repeat/:message', function(req, res) {
        console.log("/api/repeat/%s", req.params.message);
        res.send(req.params.message);
    });

    app.get('/api/db/postgres', function(req, res) {
        console.log("/api/db/postgres");
        var client = db.getPostgresClient();
        var query = client.query({
            'text' : 'SELECT NOW() AS "theTime"'
        });
        query.on('row', function(row) {
            res.send('postgres time: ' + row.theTime);
        });
    });

    app.get('/api/db/mongodb', function(req, res) {
        console.log("/api/db/mongodb");
        mongoose.connect(config.db.mongodb);
    });
}

exports.setup = setup;