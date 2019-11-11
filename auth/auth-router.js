const bcrypt = require("bcryptjs");
const router = require("express").Router();

const Users = require("../models/users-model");
const validateUser = require("../middleware/validateUser-middleware");

// POST - Register user
router.post("/register", validateUser, (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
    .then(user => res.status(201).json(user))
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Failed to add new user." })
    })   
})

module.exports = router;