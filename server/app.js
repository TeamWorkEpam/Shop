var express = require('express');
var path = require('path'); // модуль для парсинга пути
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

data = {
	categories: [],
	goods: {},
	nav: []
};
data.categories = require('./categories.js');
data.goods = require('./goods.js');
data.nav = require('./navigation.js');
app.use(express.static(path.join(__dirname, "./build"))); // запуск статического файлового сервера, который смотрит на папку build/ (в нашем случае отдает index.html)

app.get('/wares', function (req, res, next) {
  res.send(data.categories);
});
app.get('/goods', function (req, res, next) {
  res.send(data.goods);
});
app.get('/nav', function (req, res, next) {
	res.send(data.nav);
});
app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});