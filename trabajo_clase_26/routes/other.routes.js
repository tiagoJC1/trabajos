const express = require('express');
const router = express.Router();


const otherController = require("../controllers/other");

// "/"

router.get("/", otherController.index);
router.get("/detalleMenu", otherController.detalleMenu);



module.exports = router;
