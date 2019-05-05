
const async = require('./async');
const sync = require('./sync');

const kdo = async;
kdo.sync = sync;

module.exports = kdo;
