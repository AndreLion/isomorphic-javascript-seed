/**
 * Created by andliu2 on 5/28/15.
 */

var express = require('express');
var router = express.Router();
var Users = require('../models/users');


// define the home page route
router.get('/', function(req, res) {
    //res.send('login Birds home page');
    res.render('login',{title:'login page',js:['/js/login.js']});
});
// define the about route
router.post('/', function(req, res) {
    var data = req.body;
    Users.findOne({ email:data.email,password:data.password }, function (err, user) {
        if(user){
            res.send({
                success:true,
                message:'Redirecting ...'
            });
        }else{
            res.send({
                success:false,
                message:'Email or password is incorrect.'
            });
        }

    });
});

module.exports = router;