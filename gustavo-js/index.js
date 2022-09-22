const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html');
})

app.get('/blog', function(req, res){
    res.send('Welcome to our blog');
})

app.get('/hello/:name/:job', function(req, res){
    res.send('<h1>Hello ' + req.params.name + '</h1><br><h2>You are a ' + req.params.job + '</h2>');
})

app.listen(8081, function(){
    console.log('server going strong on http://localhost:8081');
});
//localhost:8082
