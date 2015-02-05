var express = require('express');
var router = express.Router();
var loremIpsum = require('lorem-ipsum');


var sics = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];

var sources = ["Exxon Mobil", "Wal-Mart Stores", "Chevron", "ConocoPhillips", "General Electric", "General Motors", "Ford Motor", "ATandT", "Hewlett-Packard", "Valero Energy", "Bank of America Corp.", "Citigroup", "Berkshire Hathaway", "International Business Machines", "McKesson", "J.P. Morgan Chase and Co.", "Verizon Communications", "Cardinal Health"];

var generateGifts = function (count, sic) {

  var gifts = [];


  for (i = 0; i < (count || 20); i++) {
    gifts.push({
      id: i + 100,
      received: Date.now(),
      description: loremIpsum(),
      source: sources[Math.floor((Math.random() * sources.length) + 1)],
      source_sic: sic || sics[Math.floor((Math.random() * sics.length) + 1)],
      comments: '',
      estimated_value: Math.floor((Math.random() * 50) + 1)
    });
  }

  return gifts;

};

/* GET gifts listing. */
router.get('/', function (req, res, next) {

  res.status(200).send(generateGifts(50, req.query.sic));

});

module.exports = router;


