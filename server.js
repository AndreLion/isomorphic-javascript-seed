require('node-jsx').install();
var express = require('express');
var re = require('react-engine');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var parseurl = require('parseurl');
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

    app.use(session({
        secret: 'whatissecret',
        resave: true,
        saveUninitialized : false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));
    app.use(function (req, res, next) {
        if(!req.session.user) {
            req.session.user = {};
        }
        //var pathname = parseurl(req).pathname;
        //views[pathname] = (views[pathname] || 0) + 1;
        next();
    })
    app.use('/', require('./routers/index'));
    app.use('/login', require('./routers/login'));
    app.use('/register', require('./routers/register'));


    app.listen(3000);
});
