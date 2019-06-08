
const config = require('./config');

const kdo = (a1, a2) => {
	const isDisablePrint = typeof a1 === 'boolean' ? a1 : typeof a2 === 'boolean' ? a2 : null;
	const libDirName = typeof a1 === 'string' ? a1 : typeof a2 === 'string' ? a2 : null;

	if (isDisablePrint !== null || libDirName || null) {
		config.set({isDisablePrint, libDirName});
	}

	return kdo;
};

kdo.do = require('./do');
kdo.dir = require('./dir');
kdo.new = require('./new');
kdo.log = require('./log');
kdo.load = require('./load');
kdo.nlog = require('./nlog');
kdo.topic = require('./topic');
kdo.config = config;

module.exports = kdo;
