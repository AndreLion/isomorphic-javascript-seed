// server.js

require('node-jsx').install();

var express = require('express');
var re = require('react-engine');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



var app = express();


var engine = re.server.create();

mongoose.connect('mongodb://localhost/isomorphic', function() {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jsx');
    app.set('view', re.expressView);
    app.engine('jsx', engine);
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.use('/', require('./routers/index'));
    app.use('/login', require('./routers/login'));
    app.use('/register', require('./routers/register'));

    app.listen(3000);
});
