/**
 * Created by andliu2 on 5/28/15.
 */


var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    var email = req.session.user && req.session.user.email;
    res.render('index',{title:'Welcome to home page',email:email});
});

module.exports = router;