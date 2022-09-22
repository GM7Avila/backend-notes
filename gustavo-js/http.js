let http = require('http');

http.createServer(function(req, res){
    res.end('hello');
}).listen(8082);

console.log('server is active');
