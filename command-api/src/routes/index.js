const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Command Center API",
        version: "0.0.1"
    });
});
console.log("index loaded!")
module.exports = router;