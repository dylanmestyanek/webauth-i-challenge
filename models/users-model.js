const db = require("../database/db-config");

module.exports = {
    get,
    getByUsername,
    add
}

function get(id) {
    if (id) {
        return db('users')
            .select('id', 'username')
            .where({ id })
            .first()
    } else {
        return db('users').select('id', 'username');
    }
}

function getByUsername(username) {
    return db('users')
        .where({ username })
        .first();
}

function add(user) {
    return db('users')
        .select('id', 'username')
        .insert(user)
        .then(([id]) => get(id));
}