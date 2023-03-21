const controller = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/User');

controller.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }
    await User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Incorrect login/password pair' });
            }
            bcrypt.compare(password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Incorrect login/password pair' });
                    }
                    const token = jwt.sign(
                        { userId: user.id },
                        'ma_cle_secrete',
                        { expiresIn: '24h' }
                    );
                    res.status(200).json({
                        userId: user.id,
                        token: token
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

module.exports = controller;