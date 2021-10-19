const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Actor', new Schema({
    name: String,
    birthday: String,
    country: String
}));