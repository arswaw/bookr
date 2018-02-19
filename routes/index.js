var express = require('express');
var router = express.Router();
const BookModel = require('./../db/models/Book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.status(500).send("Login Unsuccessful")
});

module.exports = router;
