var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/testtoken', function(req, res, next) {
    console.log("atestsssdad ");
    res.send({ "code": "202" })
});

module.exports = router;