const express = require("express");

const {
  getCarousal
} = require("../controllers/PhotoController");
 
const router = express.Router();
 
router.route("/:id").get(getCarousal)
 
module.exports = router;