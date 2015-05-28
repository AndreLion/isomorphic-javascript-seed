/**
 * Created by andliu2 on 5/28/15.
 */

var express = require('express');
var app = express();
var path = require('path');

var engineOptions = {
      beautify: true
};

var router = express.Router();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(engineOptions));

app.use(express.static(path.join(__dirname , 'public')));

// router module
app.use('/', require('./routers/index'));
app.use('/login', require('./routers/login'));

app.listen(3000);


