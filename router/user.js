const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(401);
            throw new Error('Username incorrect.')
        } else {
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password).then(isMatch => isMatch);
            if (!isPasswordMatch) {
                throw new Error('Password incorrect.')
            }
            const token = await jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.SECRET_USER, { expiresIn: '1d' })
            res.status(200).json({ token });
        }
    } catch (error) {
        next(error)
    }
});

router.post('/signup', async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10).then(async password => password);
        req.body.password = hashedPassword;
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
});

module.exports = router;