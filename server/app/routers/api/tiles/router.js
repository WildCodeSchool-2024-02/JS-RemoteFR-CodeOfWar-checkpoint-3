const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/tileActions");

router.get("/", browse);

// const tilesRouter = require("./tiles/router");

// router.use("/tiles", tilesRouter);

/* ************************************************************************* */

module.exports = router;
