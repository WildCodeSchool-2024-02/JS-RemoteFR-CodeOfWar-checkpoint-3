const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatActions = require("../../../controllers/boatActions");

const tileExists = require("../../../services/tileExists");

router.get("/", boatActions.browse);
router.put("/:id", tileExists, boatActions.edit);
/* ************************************************************************* */

module.exports = router;
