const express = require("express");
const {
  getJobs,
  createPlaces,
  deletePlace,
  updatePlace,
} = require("../controllers/jobsController");
const router = express.Router();

router.route("/getJobs").get(getJobs).post(createPlaces);
router.route("/:id").put(updatePlace).delete(deletePlace);

module.exports = router;
