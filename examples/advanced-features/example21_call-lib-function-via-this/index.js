
const kdo = require('my-kdo');
const lib = require('my-examples-lib');

// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = require('rir')(module, './flow');

// The execution result is the same as previous example
const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// Pass lib to kdo for all functions, cool!
	// There are no need to load the lib file in every file
	// We can use this.xxx instead of lib.xxx in all functions
	const result = await kdo.do(flow, args, {lib});

	return result;
};

module.exports = fn;
