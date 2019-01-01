const MovieModel = require('../models/MovieModel');
const MovieController = function (){
  
  this.getAll = (req, res) => {
    MovieModel.find(function (err, movie) {
      if (err) return next(err);
      res.send(movie);
    })
  }
  
  this.create = (req, res) => {
    var movie = new MovieModel({
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
  
  this.get = (req, res) => {
    MovieModel.findById(req.params.id, (err, movie) => {
      if (err) return next(err);
      res.send(movie);
    });
  }
  
  this.update = (req, res) => {
    MovieModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, 
      (err, movie) => {
        if (err) return next(err);
        res.send('Movie udpated.');
      }
    );
  }

  this.delete = (req, res) => {
    MovieModel.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err);
      res.send('Deleted successfully!');
    });
  }

  return {
    getAll:this.getAll,
    create:this.create,
    get:this.get,
    update:this.update,
    delete:this.delete
  }
}

module.exports = new MovieController();