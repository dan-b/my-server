var express = require('express');
var routercd  = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('greetings from xml.js!');
});

module.exports = router;
