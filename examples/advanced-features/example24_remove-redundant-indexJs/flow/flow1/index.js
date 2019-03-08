
const kdo = require('../../../../../lib');
const lib = require('../../../../../examples/__lib');

const options = {

	// The default is to sort alphabetically,
	// so if we don't specify the "first" option, the order will be:
	// 		f11
	// 		f13
	// 		flow12

	first: [
		'f11',
		'flow12',
		'f13'
	],

	lib,
};

module.exports = kdo.dir(module, options);
