const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

const tileRouter = require("./tiles/router");

router.use("/tiles", tileRouter);

/* ************************************************************************* */

module.exports = router;
