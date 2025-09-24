/////// Bootcamps Controller //////

//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@acces Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
};

//NB: getBootcamps is a variable that stores a function.
// exports.getBootcamps = ... makes this function exportable.
// You can then import and use it in your route file.

//@desc  Get single bootcamp
//@route GET /api/v1/bootcamps/:id
//@acces Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Show bootcamp ${req.params.id}`,
  });
};

//@desc  Create new bootcamp
//@route POST /api/v1/bootcamps
//@acces Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Create bootcamp",
  });
};

//@desc  Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@acces Private
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update bootcamp ${req.params.id}`,
  });
};

//@desc  Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@acces Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Delete bootcamp ${req.params.id}`,
  });
};

// NB: req.params.id contains the ID from the URL
// Template literal (backticks)  allows us to insert variables into strings