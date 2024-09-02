const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const middleware = require("../../../services/tileExists");

router.get("/", browse);
router.put("/:id", middleware, edit);

/* ************************************************************************* */

module.exports = router;
