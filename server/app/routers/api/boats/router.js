const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");
const isExist = require("../../../services/tileExists");

router.get("/", browse);

const { edit } = require("../../../controllers/boatActions");

router.put("/:id", isExist, edit);

/* ************************************************************************* */

module.exports = router;
