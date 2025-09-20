///////////////USING EXPRESS TO SET UP ROUTES//////////////////////
const express = require("express");
const router = express.Router();

/**
 * BOOTCAMP API ROUTES
 * These routes handle CRUD operations for bootcamps
 * CRUD = Create, Read, Update, Delete
 */

// GET ALL BOOTCAMPS
// URL: GET /api/v1/bootcamps
// Purpose: Retrieve a list of all bootcamps
router.get("/", (req, res) => {
  // 200 = OK status code (request successful)
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
});

// GET SINGLE BOOTCAMP BY ID
// URL: GET /api/v1/bootcamps/123 (where 123 is the ID)
// :id is a route parameter - it can be any value
router.get("/:id", (req, res) => {
  // req.params.id contains the ID from the URL
  // Note: Missing template literal backticks in original message
  res.status(200).json({
    success: true,
    message: `Show bootcamp ${req.params.id}`,
  });
});

// CREATE NEW BOOTCAMP
// URL: POST /api/v1/bootcamps
// Purpose: Add a new bootcamp to the database
router.post("/", (req, res) => {
  // In a real app, we'd get bootcamp data from req.body
  res.status(200).json({
    success: true,
    message: "Create new bootcamp",
  });
});

// UPDATE EXISTING BOOTCAMP
// URL: PUT /api/v1/bootcamps/123 (where 123 is the ID to update)
// PUT is used for updating entire resources
router.put("/:id", (req, res) => {
  // Template literal (backticks) allows us to insert variables into strings
  res.status(200).json({
    success: true,
    message: `Update bootcamp ${req.params.id}`,
  });
});

// DELETE BOOTCAMP
// URL: DELETE /api/v1/bootcamps/123 (where 123 is the ID to delete)
router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Delete bootcamp ${req.params.id}`,
  });
});

// The reason why we are no more using app. is because its module is not here and thus we can't access it.
// However there is another option of using express module by initializing express variable
// We then derive the .Router() method and assign it to the router variable



module.exports = router;