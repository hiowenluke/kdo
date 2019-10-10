
const kdo = require('../../../src');

// Kdo.flow() returns a function which does the following:
// 		1. Requires the current directory (including sub-directories) as flow object
// 		2. Executes all functions in the flow object one by one

// btw: kdo.dirFn() is an alias of kdo.flow() which is more accurate.
module.exports = kdo.flow();
