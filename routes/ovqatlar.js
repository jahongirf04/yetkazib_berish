const express = require("express");

const router = express.Router();

const ovqatlarController = require("../controllers/ovqatlar");

//create
router.post("/", ovqatlarController.createOvqat);

// //get
router.get("/", ovqatlarController.getOvqatlar);

// //getOne
router.get("/:id", ovqatlarController.getOvqat);

// // update
router.put("/:id", ovqatlarController.updateOvqat);

// //delete
router.delete("/:id", ovqatlarController.deleteOvqat);

module.exports = router;
