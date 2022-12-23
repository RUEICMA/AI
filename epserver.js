var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.get('/submit-data', function (req, res) {
    res.send('POST Request');
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
