const express = require("express");
const router = express.Router();

const home = require("./home");
const audio = require("./audio");

/**
 * HOME OR INDEX OR /
*/

router.get("/",home.get);


/**
 * AUDIO
*/

router.get("/audio",audio);


module.exports = router;