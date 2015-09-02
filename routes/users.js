var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var connectionString = "mongodb://root:root@ds041603.mongolab.com:41603/users";
//var connectionString = "mongodb://MongoLab-6:mbYjxpVI4dL7L5VKSfOld2T8HVRChMDc8ESqbISz1GE-@ds052827.mongolab.com:52827/MongoLab-6";
mongoose.connect(connectionString);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
