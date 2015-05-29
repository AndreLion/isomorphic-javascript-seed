var express = require('express');
var router = express.Router();
var Users = require('../models/users');


// define the home page route
router.get('/', function(req, res) {
    res.render('register',{title:'register page',js:['/js/register.js']});
});
// define the about route
router.post('/', function(req, res) {
    var data = req.body;
    if(data.password !== data.confirm){
        res.send({
            success:false,
            message:'Passwords don\'t match.'
        });
    }else{
        Users.findOne({ email:data.email }, function (err, user) {
            if(user){
                res.send({
                    success:false,
                    message:'email already existed'
                });
            }else{
                var newUser = new Users({
                    name:data.email,
                    email:data.email,
                    password:data.password
                });
                newUser.save(function(err,user){
                    res.send({
                        success:true
                    });
                });
            }
        });
    }
});

module.exports = router;