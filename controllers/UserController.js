const controller = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/User');

controller.getUserNotCo = async (req, res) => {
    const response = await User.findOne(
        {
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: { id: req.params.userId }
        })
        .then(function (data) {
            const res = { success: true, data: data };
            return res;
        })
        .catch(error => {
            const res = { success: false, error: error };
            return res;
        })
    res.json(response);
};

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

controller.getUser = async (req, res) => {
    const response = await User.findOne(
        {
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            where: { id: req.user.id }
        })
        .then(function (data) {
            const res = { success: true, data: data };
            return res;
        })
        .catch(error => {
            const res = { success: false, error: error };
            return res;
        })
    res.json(response);
};

controller.updateUser = async (req, res) => {
    try {
        let updateValues = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        };

        // check if password was updated
        if (req.body.password && req.body.password !== "") {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            updateValues.password = hashedPassword;
        }

        await User.update(
            updateValues,
            { where: { id: req.user.id } }
        );
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};

module.exports = controller;