// From now on this will be our entry point
const dotenv = require('dotenv');
// Environment variables
// console.log(app.get('env'));  // environment variables by express
dotenv.config({ path: './config.env' }); // config env before you import app.

const app = require('./app.js');

// console.log(process.env); // environment variables by node.js

// Listening to server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening @ port ${port}`);
});
