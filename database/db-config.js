const knex = require("knex");

const config = require("../knexfile").development;

const environment = process.env.NODE_ENV || 'development';

module.exports = knex(knexfile[environment]);