const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatActions = require("../../../controllers/boatActions");

router.get("/", boatActions.browse);
router.put("/:id", boatActions.edit);
/* ************************************************************************* */

module.exports = router;
