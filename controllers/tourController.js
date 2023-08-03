// Controller file takes the data and handles the handler functions. These handlers are called Controllers.

const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

//Checking ID by param middleware
exports.checkID = (req, res, next, val) => {
    if (+req.params.id > tours.length) {
        return res.status(404).json({ status: 'failure', message: 'Invalid ID' });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad Request',
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success', // Using the JSend Data specification which uses {status: __ , data:___};
        results: tours.length, // Not a needed specification but good to send so that client knows how  many entries are coming
        data: {
            tours,
        },
    });
};

exports.getTour = (req, res) => {
    const id = +req.params.id; // string to number conversion
    const tour = tours.find((el) => el.id === id);

    res.status(200).json({
        status: 'success', // Using the JSend Data specification which uses {status: __ , data:___};
        data: {
            tour,
        },
    });
};

exports.createTour = (req, res) => {
    // console.log(req.body);

    // making new object and persistence
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body); // Creates new object. Comma seperated 2 objects will be merged.
    tours.push(newTour); //pushing to the tours array

    //persisting in the file
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            },
        });
    });
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour>',
        },
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
