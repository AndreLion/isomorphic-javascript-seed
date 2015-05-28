// server.js

require('node-jsx').install();

var express = require('express');
var re = require('react-engine');
var path = require('path');



var app = express();


var engine = re.server.create();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jsx');
app.set('view', re.expressView);
app.engine('jsx', engine);

app.use(express.static(path.join(__dirname,'public')));

app.use('/', require('./routers/index'));
app.use('/login', require('./routers/login'));

app.listen(3000);
