
const caller = require('caller');
const lib = require('./__lib');

const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdoObj = require('./obj');

const kdo = (...args) => {

	// Always load the directory where the caller is located as an object
	lib.addCallerToArgs(args, caller());

	return kdoObj(...args);
};

Object.assign(kdo, async); // The default is async edition
kdo.sync = sync; // Attach sync edition

kdo.config = config;
kdo.obj = kdoObj;

module.exports = kdo;
