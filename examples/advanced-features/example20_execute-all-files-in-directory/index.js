
const kdo = require('../../../lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = kdo.require(module, './flow');

// The execution result is the same as example01
const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// Pass flow to kdo to execute all function in flow, cool!
	const result = await kdo(flow, args);

	return result;
};

module.exports = fn;
