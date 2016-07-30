var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/payload', function(req, res) {
    console.log('payload');
    res.send('payload');
});

app.get('/payload', function(req, res) {
    console.log('payload');
    res.send('payload');
});

app.put('/payload', function(req, res) {
    console.log('payload');
    res.send('payload');
});

app.listen(4041);