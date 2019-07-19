
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdo = (...args) => {
	config(...args);
	return kdo;
};

// The default is async
Object.assign(kdo, async);

// Attach sync edition
kdo.sync = sync;

// Attach config
kdo.config = config;

module.exports = kdo;
