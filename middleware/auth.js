const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            throw new Error("Authorization header missing");
        }
        const token = authHeader.replace("Bearer ", "");
        const decoded = jwt.verify(token, 'ma_cle_secrete');
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });
        if (!user) {
            throw new Error("User not found");
        }
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
};

module.exports = authMiddleware;
