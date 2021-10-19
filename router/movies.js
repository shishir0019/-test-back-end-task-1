const router = require('express').Router();
const Movie = require('../model/Movie')

const { requiredUser } = require('../middleware/auth');

router.get('/', requiredUser, async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const movie = new Movie(req.body);
    try {
        await movie.save();
        res.json(movie);
    } catch (error) {
        next(error);
    }
});

module.exports = router;