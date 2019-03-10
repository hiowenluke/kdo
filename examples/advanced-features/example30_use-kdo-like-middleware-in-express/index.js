
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Split complex logic into multiple small functions,
// each function is saved as a separate file,

// and these files are stored in multiple directories
// (even with multiple-level if needed), this makes
// the code structure clear, easy to understand and maintain.

// Yes, we can easily build complex projects with kdo.
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = require('rir')(module, './flow');

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// For options, see example51 in options-features
	const k = kdo.new(args, {lib});

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(flow.f1);
	k.use(flow.f4);
	k.use(flow.f2);
	k.use(flow.f3);

	// Execute all loaded functions
	const result = await k.do();

	return result;
};

module.exports = fn;
