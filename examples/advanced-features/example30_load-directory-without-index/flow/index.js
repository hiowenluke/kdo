
const kdo = require('../../../../lib');
const lib = require('../../../../examples/__lib');

const options = {
	first: 'f5',

	lib,

	// Use this option to replace kdo.config({isPrintTree: true})
	kdo: {
		isPrintTree: true
	}
};

module.exports = kdo.dir(module, options);
