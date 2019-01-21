const express = require("express");
const router = express.Router();
const home = require("./home");
const dashboard = require("./dashboard");
const passport = require("passport");
const configs = require("../configs/passport");

/**
 *  / OR HOME OR INDEX
*/


router.get("/",home.get);

/**
 *  AUTHENTICATION @{login}
*/


/**
 *  AUTHENTICATION @{register}
*/




/**
 * DASHBOARD
*/
    //@{client-home}
    router.get("/dashboard",configs.isAuthenticated,dashboard.client.home.get);


/**
 * PROFILES
*/
router.get("/dj",(req,res,next)=>res.render("dj"))
/**
 * SHOWS
*/
router.get("/presenters",(req,res,next)=>res.render("/"))

/**
 * EVENTS
*/
router.get("/events",(req,res,next)=>res.render("events"))

/**
 * CONTACTS
*/
router.get("/contact-us",(req,res,next)=>res.render("contact"))
/**
 * ARTICLES
*/

router.get("/about",(req,res,next)=>res.render("about"))

router.get("/trending",(req,res,next)=>res.render("trending"))

/**
 * PODCASTS
 */

router.get("/podcasts",(req,res,next)=>res.render("podcast"))

module.exports = router;