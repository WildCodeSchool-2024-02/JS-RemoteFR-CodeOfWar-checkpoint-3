const express = require("express");

const router = express.Router();

const tileActions = require("../../../controllers/tileActions");

router.get("/", tileActions.browse);

module.exports = router;
