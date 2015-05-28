/**
 * Created by andliu2 on 5/28/15.
 */


var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function(req, res) {
    res.render('index',{title:'Welcome to home page'},function(err,html){
        console.log(html);
        res.end(html);
    });
});

module.exports = router;
