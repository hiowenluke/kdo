
const lib = require('../lib');
const kdo = require('../lib/kdo');

// load all functions in current directory to me
const me = require('rir')(module);

const fn = async () => {

	// execute all functions in the specified order, cool!
	await kdo(me, {

		// 1. execute the functions in option "first" at first
		first: [
			'c',
			'e',
		],

		// or 'c' if there is only one name
		// first: 'c'

		// 2. execute the functions in option "last" at end
		last: [
			'a',
			'g'
		],

		// or 'a' if there is only one name
		// last: 'a'

		// 3. the other functions which not in first and last
		// will be executed in their original order.

		// pass lib to all functions
		lib,
	});

	return true;
};

module.exports = fn;
