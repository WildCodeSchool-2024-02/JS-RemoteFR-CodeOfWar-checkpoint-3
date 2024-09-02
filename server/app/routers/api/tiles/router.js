const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/tileActions");
const { tileExists } = require("../../../services/tileExists");

router.get("/", tileExists, browse);

module.exports = router;
