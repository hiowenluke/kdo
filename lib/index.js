
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdo = (...args) => {
	config(...args);
	return kdo;
};

// The default is async
Object.assign(kdo, async);

Object.assign(kdo, async); // The default is async edition
kdo.sync = sync; // Attach sync edition

kdo.config = config;

module.exports = kdo;
