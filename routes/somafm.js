var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('../somafm/www/index.html');
});

module.exports = router;
