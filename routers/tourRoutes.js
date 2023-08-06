//Routes file is importing all those handlers into itself, then creates a router with the help of express
// And then calls all those handlers with their appropriate verb. Whatever the response they get they send to
// main app file. There they are mounted using middleware and listen to them on the http

// Each router works as a mini application

const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

//param middleware
// router.param('id', tourController.checkID);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
