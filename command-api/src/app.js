const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const configRoute = require('./routes/config-route');

app.use('/', index);
app.use('/config', configRoute);
console.log("app loaded!")
module.exports = app;