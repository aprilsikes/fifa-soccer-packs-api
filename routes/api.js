var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Players() {
  return knex('players');
}

router.get('/', function(req, res, next) {
  Players().select().then(function (players) {
    res.json(players);
  })
});

module.exports = router;
