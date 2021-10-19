const mongoose = require('mongoose');
const { Schema } = mongoose;
const ActorSchema = mongoose.model('Actor').schema

module.exports = mongoose.model('Movie', new Schema({
    title: String,
    year: String,
    rating: String,
    actors: [ActorSchema]
}));