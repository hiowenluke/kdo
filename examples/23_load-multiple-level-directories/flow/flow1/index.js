
const kdo = require('../../../../src');

const options = {

	// Specify the "first" option to execute in the order we expect
	first: [
		'f11',
		'flow12',
	]

	// Because the default is to sort alphabetically,
	// and if we don't do that, the order will be:
	// 		f11
	// 		f13
	//		f14
	//		f15
	// 		flow12
};

module.exports = kdo.flow(options);
