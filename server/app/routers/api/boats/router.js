const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const {
  browse,
  updateBoatAction,
} = require("../../../controllers/boatActions");

router.get("/", browse);
router.put("/:id", updateBoatAction);

/* ************************************************************************* */

module.exports = router;
