const express = require("express");
const { searchBuyurtma } = require("../controllers/search");

const router = express.Router();

// Search
router.get("/", searchBuyurtma);

module.exports = router;
