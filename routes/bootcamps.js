///////////////USING EXPRESS TO SET UP ROUTES//////////////////////
const express = require("express");
// The controller functions are imported and destructured
const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

/**
 * BOOTCAMP API ROUTES
 * These routes handle CRUD operations for bootcamps
 * CRUD = Create, Read, Update, Delete
 */


// GET ALL BOOTCAMPS & CREATE NEW BOOTCAMP
// URL: GET /api/v1/bootcamps (fetch all bootcamps)
// URL: POST /api/v1/bootcamps (create a new bootcamp)
router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamps);


// GET, UPDATE, DELETE SINGLE BOOTCAMP BY ID
// URL: GET /api/v1/bootcamps/:id (fetch single bootcamp)
// URL: PUT /api/v1/bootcamps/:id (update bootcamp)
// URL: DELETE /api/v1/bootcamps/:id (delete bootcamp)
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamp)


// The reason why we are no more using app. is because its module is not here and thus we can't access it.
// However there is another option of using express module by initializing express variable
// We then derive the .Router() method and assign it to the router variable

// NB: .route() allows chaining multiple HTTP methods

module.exports = router;
