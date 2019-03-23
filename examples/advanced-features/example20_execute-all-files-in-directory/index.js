
const kdo = require('../../../lib');

// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = require('rir')(module, './flow');

// The execution result is the same as example01
const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// Pass flow to kdo to execute all function in flow, cool!
	const result = await kdo.do(flow, args);

	return result;
};

module.exports = fn;
