const bootcamp = require("../models/places");
const axios = require("axios");

//@desc         Get all places
//@route        GET /api/v1/places
//@access       private

exports.getJobs = async (req, res, next) => {
  const { resultCountPerPage, jobTitle } = req.query;
  const appId = process.env.APP_id;
  const appKey = process.env.APP_key;
  // const baseURL = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=838166e8&app_key=db25f121d2faf7e35ee3891033d76741&results_per_page=20&what=javascript%20developer&content-type=application/json`;
  const baseUrl = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=${resultCountPerPage}&what=${jobTitle}&content-type=application/json;`;

  try {
    const response = await axios.get(baseUrl);
    console.log(response);
    res.status(200).json({
      success: true,
      msg: "Job fetching successful",
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, msg: "Error fetching jobs" });
  }
};

//@desc         Create all places
//@route        POST /api/v1/places
//@access       private
exports.createPlaces = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create all places" });
};

//@desc         Update places with id
//@route        PUT /api/v1/places
//@access       private
exports.updatePlace = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Update all places with id " + req.params.id });
};

//@desc         Delete place
//@route        Delete /api/v1/places
//@access       private
exports.deletePlace = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete all places" });
};
