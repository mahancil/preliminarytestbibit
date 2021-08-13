var express = require('express');
var router = express.Router();
var omdb_controllers = require('../controllers/GetOMDB');

/* GET users listing. */
router.get('/search', omdb_controllers.searchOMDB);
router.get('/detail', omdb_controllers.searchOMDBById);
router.get('/bracketfind', omdb_controllers.findFirstStringInBracket);
router.post('/anagram', omdb_controllers.anagram);

module.exports = router;
