const bcrypt = require("bcryptjs");

const Users = require("../models/users-model");

module.exports = (req, res, next) => {
const { username, password }= req.headers;

    if (username && password) {
        Users.getByUsername(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(400).json({ message: "Don't think about it fool!" })
            }
        })
        .catch(err => res.status(500).json({ error: "There was an error, please try again later." }))
    } else {
        res.status(400).json({ message: "Please provide user credentials." })
    }
}