// Controller file takes the data and handles the handler functions. These handlers are called Controllers.

// const fs = require("fs");
const Tour = require("./../model/tourModel");

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

//Checking ID by param middleware
// exports.checkID = (req, res, next, val) => {
//   if (+req.params.id > tours.length) {
//     return res.status(404).json({ status: "failure", message: "Invalid ID" });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     res.status(400).json({
//       status: "failed",
//       message: "Bad Request",
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success", // Using the JSend Data specification which uses {status: __ , data:___};
      // results: tours.length, // Not a needed specification but good to send so that client knows how  many entries are coming
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "bad request",
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<updated tour>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
