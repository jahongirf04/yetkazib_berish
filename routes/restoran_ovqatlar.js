const express = require("express");

const router = express.Router();

const restoran_ovqatlarRoutes = require("../controllers/restoran_ovqatlar");
//create
router.post("/", restoran_ovqatlarRoutes.createRestoran_ovqat);

// //get
router.get("/", restoran_ovqatlarRoutes.getRestoran_ovqatlar);

// //getOne
router.get("/:id", restoran_ovqatlarRoutes.getRestoran_ovqat);

// // update
router.put("/:id", restoran_ovqatlarRoutes.updateRestoran_ovqat);

// //delete
router.delete("/:id", restoran_ovqatlarRoutes.deleteRestoran_ovqat);

module.exports = router;
