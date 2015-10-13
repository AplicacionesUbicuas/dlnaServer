var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/reproductor', function(req, res, next) {
 // res.writeHead(200, {"Content-Type": "text/html"});
  res.render('index', { title: 'Express' });
 // res.end();
 
});

module.exports = router;
