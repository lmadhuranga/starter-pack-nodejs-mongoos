const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {type: String, required: true, max: 100},
    path: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('Movie', MovieSchema);