const express = require('express');

const app = express();

const tourRouter = require('./routers/tourRoutes');
const userRouter = require('./routers/userRoutes');

//middleware
app.use(express.json());
app.use('/api/v1/tours', tourRouter); // Called Mounting
app.use('/api/v1/users', userRouter);

module.exports = app;
