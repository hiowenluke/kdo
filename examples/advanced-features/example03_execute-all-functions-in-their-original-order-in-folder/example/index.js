
const lib = require('../lib');
const kdo = require('../lib/kdo');

// load all functions in current directory to me
const me = require('rir')(module);

const fn = async () => {

	// execute all functions in me in their original order, cool!
	await kdo(me, {lib});

	return true;
};

module.exports = fn;
