const express = require("express");
const router = express.Router();

const mijozlarRoutes = require("./mijozlar");
const yetkazuvchilarRoutes = require("./yetkazuvchilar");
const ovqatlarRoutes = require("./ovqatlar");
const restoranlarRoutes = require("./restoranlar");
const restoranOvqatlarRoutes = require("./restoran_ovqatlar");
const buyurtmalarRoutes = require("./buyurtmalar");

router.use("/mijozlar", mijozlarRoutes);

router.use("/yetkazuvchilar", yetkazuvchilarRoutes);

router.use("/ovqatlar", ovqatlarRoutes);

router.use("/restoranlar", restoranlarRoutes);

router.use("/restoran_ovqatlar", restoranOvqatlarRoutes);

router.use("/buyurtmalar", buyurtmalarRoutes);

module.exports = router;
