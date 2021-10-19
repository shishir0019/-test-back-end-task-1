const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test').then(e => {
    console.log('connected.');
}).catch(err => {
    console.log(err);
})

module.exports = mongoose;