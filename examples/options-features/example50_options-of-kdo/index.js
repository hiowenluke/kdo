
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Split complex logic into multiple small functions and
// save each function in a separate file, which will make
// the code structure clear, easy to understand and maintain
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = kdo.require(module, './flow');

// The execution result is the same as example01
const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// Pass flow to kdo to execute all function in flow, cool!
	const result = await kdo.do(flow, args);

	return result;
};

module.exports = fn;
