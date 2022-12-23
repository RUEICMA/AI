var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  var log = '用戶IP位址：'+ req.connection.remoteAddress;
  console.log(log);
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html')
});

app.post('/regist',function(req,res){
  var user=req.body.user;
  var email=req.body.email;
  var boards = req.body.boards;

  var html = '暱稱：' + user + '<br>' +
             '電郵：' + email + '<br>' +
             '控制板：' + boards.toString();

  res.send(html);
});

app.get('*', function(req, res) {
  res.status(404);
  res.send('找不到網頁！');
});

app.listen(5438, function(req, res) {
  console.log("網站伺服器在5438埠口開工了！");
});