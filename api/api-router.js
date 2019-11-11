const router = require("express").Router();

const authRouter = require("../auth/auth-router");

router.use("/api", authRouter);

module.exports = router;