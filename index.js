var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

var task = ['buy food', 'practice nodejs'];

app.post('/addtask', function(req,res){
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect('/');
});
app.get('/', function (req, res) {
    res.render('index', { task: task});
});

app.listen(3000, function () {
    console.log('example app ');
})
