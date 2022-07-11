const express = require("express");
const { TraductionController } = require("../controllers");

const router = express.Router();

router.get("/", TraductionController.browse);

module.exports = router;
