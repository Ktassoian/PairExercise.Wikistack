// all of our requires?

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.urlencoded({ extended: false }));

module.exports = {};
