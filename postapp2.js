var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');  //回應靜態文件
});

/*app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});*/

app.get('/submit-student-data', function (req, res) {
    var name = req.query.firstName + ' ' + req.query.lastName;

    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});
