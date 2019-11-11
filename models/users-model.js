const db = require("../database/db-config");

module.exports = {
    get,
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

function add(user) {
    return db('users')
        .select('id', 'username')
        .insert(user)
        .then(([id]) => get(id));
}