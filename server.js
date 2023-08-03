// From now on this will be our entry point

const app = require('./app.js');

// Listening to server
const port = 8000;
app.listen(port, () => {
    console.log(`listening @ port ${port}`);
});
