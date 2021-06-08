var express = require('express');
var router = express.Router();

/* GET employment page. */
router.get('/', function(req, res, next) {
  res.render('employment');
});

module.exports = router;
