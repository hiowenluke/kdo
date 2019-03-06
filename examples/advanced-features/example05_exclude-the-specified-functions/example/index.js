
const lib = require('../lib');
const kdo = require('../lib/kdo');

// load all functions in current directory to me
const me = require('rir')(module);

const fn = async () => {

	// execute all functions in me in their original order, cool!
	await kdo(me, {

		// exclude the specified functions
		exclude: [
			'c',
			'e'
		],

		// pass lib to all functions
		lib,
	});

	return true;
};

module.exports = fn;
