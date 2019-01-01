const express = require('express');
const bodyParser = require('body-parser');

const movieRoute = require('./routes/movie.route'); // Imports routes for the movies
const app = express();
const port = 3000;

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://admin:admin123@ds117834.mlab.com:17834/filmmanager';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup Routes
app.use('/movies', movieRoute);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});