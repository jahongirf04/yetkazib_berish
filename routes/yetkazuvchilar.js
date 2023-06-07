const express = require("express");

const router = express.Router();

const yetkazuvchilarController = require("../controllers/yetkazuvchilar");

//create
router.post("/", yetkazuvchilarController.createYetkazuvchi);

// //get
router.get("/", yetkazuvchilarController.getYetkazuvchilar);

// //getOne
router.get("/:id", yetkazuvchilarController.getYetkazuvchi);

// // update
router.put("/:id", yetkazuvchilarController.updateYetkazuvchi);

// //delete
router.delete("/:id", yetkazuvchilarController.deleteYetkazuvchi);

module.exports = router;
