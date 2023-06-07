const express = require("express");

const router = express.Router();

const mijozlarController = require("../controllers/mijozlar");

//create
router.post("/", mijozlarController.createMijoz);

//get
router.get("/", mijozlarController.getMijozlar);

//getOne
router.get("/:id", mijozlarController.getMijoz);

// update
router.put("/:id", mijozlarController.updateMijoz);

//delete
router.delete("/:id", mijozlarController.deleteMijoz);

module.exports = router;
