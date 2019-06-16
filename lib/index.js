
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdo = (a1, a2) => {
	const isDisablePrint = typeof a1 === 'boolean' ? a1 : typeof a2 === 'boolean' ? a2 : null;
	const libDirName = typeof a1 === 'string' ? a1 : typeof a2 === 'string' ? a2 : null;

	if (isDisablePrint !== null || libDirName || null) {
		config.set({isDisablePrint, libDirName});
	}

	return kdo;
};

// The default is async
Object.assign(kdo, async);

// Attach sync edition
kdo.sync = sync;

// Attach config
kdo.config = config;

module.exports = kdo;
