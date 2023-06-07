const express = require("express");

const router = express.Router();

const restoranlarController = require("../controllers/restoranlar");
//create
router.post("/", restoranlarController.createRestoran);

// //get
router.get("/", restoranlarController.getRestoranlar);

// //getOne
router.get("/:id", restoranlarController.getRestoran);

// // update
router.put("/:id", restoranlarController.updateRestoran);

// //delete
router.delete("/:id", restoranlarController.deleteRestoran);

module.exports = router;
