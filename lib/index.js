
const requireDirectory = require('rir');
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

// The kdo() is to require directory
const kdo = (...args) => {
	return requireDirectory(...args);
};

// The default is async
Object.assign(kdo, async);

// Attach sync edition
kdo.sync = sync;

// Attach config
kdo.config = config;

module.exports = kdo;
