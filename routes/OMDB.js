var express = require('express');
var router = express.Router();
var omdb_controllers = require('../controllers/GetOMDB');

/* GET users listing. */
router.get('/search', omdb_controllers.searchOMDB);
router.get('/detail', omdb_controllers.searchOMDBById);

module.exports = router;
