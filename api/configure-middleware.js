const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexSessionStorage = require("connect-session-knex")(session);
const knexConnection = require("../database/db-config");

const sessionConfig = {
    name: 'monkey',
    secret: "I don't know what I am doing!",
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStorage({ 
        knex: knexConnection,
        tablename: 'users_sessions',
        sidfieldname: 'id',
        createtable: true
    })
};


module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(cors());
    server.use(session(sessionConfig));
};
