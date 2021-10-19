const jwt = require('jsonwebtoken');
const User = require('../model/User');

async function requiredUser(req, res, next) {
    try {
        const authHeader = req.get('authorization');
        if (!authHeader) {
            throw new Error('Unauthorized');
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Token failed.');
        }
        const tokenInfo = await jwt.verify(token, process.env.SECRET_USER);
        const user = await User.findOne({ _id: tokenInfo._id, email: tokenInfo.email });
        req.user = user;
        next();
    } catch (error) {
        res.status(401);
        next(new Error(error.message));
    }
}
module.exports = { requiredUser }