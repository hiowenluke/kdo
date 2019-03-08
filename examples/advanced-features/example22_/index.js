
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

// The execution result is the same as previous example
const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// Pass lib to kdo for all functions, cool!
	// There are no need to load the lib file in every file
	// We can use this.xxx instead of lib.xxx in all functions
	const result = await kdo(flow, args, {lib});

	return result;
};

module.exports = fn;
