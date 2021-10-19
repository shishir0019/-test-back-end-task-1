const router = require('express').Router();
const Actor = require('../model/Actor');

router.get('/', async (req, res, next) => {
    try {
        const actors = await Actor.find({});
        res.json(actors);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const actor = new Actor(req.body);
    try {
        await actor.save();
        res.json(actor);
    } catch (error) {
        next(error);
    }
});

module.exports = router;