const express = require('express');
const app = express();

require('dotenv').config();
// db
require('./config/databage');

app.use(express.json());

app.use('/api',require('./router'));

app.use((req, res, next) => {
    res.status(404);
    next(new Error('Not Fount -' + req.url));
})

app.use((err, req, res, next) => {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message
    });
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server run on http://localhost:${PORT}`));