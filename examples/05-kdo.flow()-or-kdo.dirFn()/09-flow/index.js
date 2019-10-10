
const kdo = require('../../../src');

const order = [
	'flow1',
	'flow2',
	'flow3',
	'f4',
	'f5'
];

// Kdo.flow() returns a function which does the following:
// 		1. Requires the current directory (including sub-directories) as flow object
// 		2. Executes all functions in the flow object one by one
module.exports = kdo.flow(order);
