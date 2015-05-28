/**
 * Created by andliu2 on 5/28/15.
 */


var express = require('express');
var router = express.Router();

// middleware specific to this router
//router.use(function timeLog(req, res, next) {
//    console.log('Time: ', Date.now());
//    next();
//});
// define the home page route
router.get('/', function(req, res) {
    res.send('login Birds home page');
});
// define the about route
router.post('/', function(req, res) {
    //res.send('About birds');
});

module.exports = router;
