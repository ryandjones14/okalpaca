var express = require('express');
var router = express.Router();
var Alpaca = require('../models/alpaca');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var alpaca = Alpaca.findOne({name: "Winston"}, 'name image bio', function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      res.render({title: 'OKAlpaca', alpaca: alpaca});
    }
  });
});

module.exports = router;
