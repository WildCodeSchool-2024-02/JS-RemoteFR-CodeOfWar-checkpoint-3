const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");

router.get("/", browse);

const { update } = require("../../../controllers/boatActions");

router.put("/", update);

/* ************************************************************************* */

module.exports = router;
