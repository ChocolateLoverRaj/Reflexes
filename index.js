var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "genetics.html" );
})

app.listen(proccess.env.PORT);
