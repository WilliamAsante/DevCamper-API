//MIDDLEWARE


//desc  Logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  //Always ends with next() function
  next();
};

module.exports = logger;
