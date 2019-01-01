const MovieModel = require('../models/MovieModel');
class MovieController {
  constructor() {
    console.log('MovieController construcutr');
  }
  
  getAll(req, res) {
    MovieModel.find(function (err, movie) {
      if (err) return next(err);
      res.send(movie);
    })
  }
  
  create(req, res) {
    const movie = new MovieModel({
      name: req.body.name,
      path: req.body.path
    });
    
    movie.save(function (err) {
      if (err) {
        return next(err);
      }
        res.send('Movie Created successfully');
    });
  }
  
  get(req, res) {
    MovieModel.findById(req.params.id, (err, movie) => {
      if (err) return next(err);
      res.send(movie);
    });
  }
  
  update(req, res) {
    MovieModel.findByIdAndUpdate(req.params.id, { $set: req.body },(err, movie) => {
      if (err) return next(err);
      res.send('Movie udpated.');
    });
  }
  
  delete(req, res) {
    MovieModel.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err);
      res.send('Deleted successfully!');
    });
  }  
}

module.exports = new MovieController();