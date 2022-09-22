const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Welcome to our app!');
});

app.get('/sobre', function(req, res){
    res.send('Our page About');
})

app.get('/blog', function(req, res){
    res.send('Welcome to our blog');
})

app.listen(8081, function(){
    console.log('server going strong on http://localhost:8081');
});
//localhost:8082
