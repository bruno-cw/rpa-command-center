const express = require('express');
const router = express.Router();
const controller = require('../controllers/config-controller')
router.get('/', controller.get);
console.log("config-route loaded!")
module.exports = router;