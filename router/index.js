const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/actors', require('./actors'));
router.use('/movies', require('./movies'));

module.exports = router;