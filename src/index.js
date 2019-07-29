
const caller = require('caller');

const requireDirectory = require('./requireDirectory');
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdo = (...args) => {
	return requireDirectory(...args, caller());
};

Object.assign(kdo, async); // The default is async edition
kdo.sync = sync; // Attach sync edition
kdo.config = config;

module.exports = kdo;
