var express = require('express');
var router = express.Router();
const BookModel = require('./../db/models/Book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
