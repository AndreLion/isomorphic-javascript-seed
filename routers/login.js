/**
 * Created by andliu2 on 5/28/15.
 */

var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function(req, res) {
    //res.send('login Birds home page');
    res.render('login',{title:'Welcome to home page'});
});
// define the about route
router.post('/', function(req, res) {
    //res.send('About birds');
});

module.exports = router;