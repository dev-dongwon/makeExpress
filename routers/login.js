const debug = require('../utils/debug')('login');

const login = () => (req, res, next) => {
    debug(`login() ${JSON.stringify(req.body)}`)

};

module.exports = login;