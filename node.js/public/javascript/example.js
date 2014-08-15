var http = require('http');
http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('I love you baby!\n- Frank');
}).listen(process.env.PORT, process.env.IP);
console.log("Server running at %s:%s", process.env.IP, process.env.PORT);