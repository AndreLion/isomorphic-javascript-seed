/**
 * Created by andliu2 on 5/28/15.
 */

var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function(req, res) {
    req.session.user = {};
    res.redirect(301, '/');
});

module.exports = router;