const express = require("express");
const router = express.Router();

const mijozlarRoutes = require("./mijozlar");

router.use("/mijozlar", mijozlarRoutes);

module.exports = router;
