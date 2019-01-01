var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    name: {type: String, required: true, max: 100},
    path: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Movie', MovieSchema);