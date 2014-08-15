var config = require('./config');
var pg = require('pg');

function getPostgresClient() {
    var client = new pg.Client({
        user: "mtdqzhejfiavkf",
        password: "kA3ybJai-SJvu4W1i2NnzP7Rin",
        database: "d9a7rl134h6v28",
        port: 5432,
        host: "ec2-107-20-214-225.compute-1.amazonaws.com",
        ssl: true
    });
    client.on('drain', client.end.bind(client));
    client.connect();
    return client;
}

exports.getPostgresClient = getPostgresClient;