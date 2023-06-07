const express = require("express");

const router = express.Router();

const buyurmalarController = require("../controllers/buyurtmalar");
const { searchBuyurtma } = require("../controllers/search");
//create
router.post("/", buyurmalarController.createBuyurtma);

//get
router.get("/", buyurmalarController.getBuyurtmalar);

//getOne
router.get("/:id", buyurmalarController.getBuyurtma);

// update
router.put("/:id", buyurmalarController.updateBuyurtma);

//delete
router.delete("/:id", buyurmalarController.deleteBuyurtma);

module.exports = router;
