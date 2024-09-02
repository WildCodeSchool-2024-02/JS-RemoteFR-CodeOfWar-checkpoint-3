const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const tilesRouter = require("./tiles/router");

router.use("/tiles", tilesRouter);

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

/* ************************************************************************* */

module.exports = router;
