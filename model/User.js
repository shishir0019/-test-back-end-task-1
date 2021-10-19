const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('User', new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}));