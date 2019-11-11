const bcrypt = require("bcryptjs");
const router = require("express").Router();

// POST - Register user
router.post("/register", (req, res) => {
    const { username, password }= req.body;
    const hash = bcrypt.hashSync(password, 12);

    
})

module.exports = router;