var Movie = require('../models/movie');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    console.log('call test cunftion');
    res.send('Greetings from the Test controller!');
};

exports.movie_create = function (req, res) { 
    var movie = new Movie(
        {
            name: req.body.name,
            path: req.body.path
        }
    );

    movie.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Movie Created successfully')
    })
};

exports.movie_update = function (req, res) {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
        if (err) return next(err);
        res.send('Movie udpated.');
    });
};

exports.movie_delete = function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};