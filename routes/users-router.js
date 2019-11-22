const router = require("express").Router();

const Users = require("../models/users-model");
const requiresAuth = require("../auth/requiresAuth-middleware");

// GET - all users
router.get("/", requiresAuth, (req, res) => {
    Users.get()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: "Failed to get all users." }))
})

module.exports = router;