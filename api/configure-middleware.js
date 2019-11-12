const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const sessionConfig = {
    name: 'monkey',
    secret: "I don't know what I am doing!",
    cookie: {
        maxAge: 1000 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false
};


module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(cors());
    server.use(session(sessionConfig));
};
