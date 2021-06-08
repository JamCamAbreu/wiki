var express = require('express');
var router = express.Router();

/* GET thoughts page. */
router.get('/', function(req, res, next) {
  res.render('thoughts');
});

module.exports = router;
