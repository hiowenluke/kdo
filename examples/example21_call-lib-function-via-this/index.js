
const kdo = require('../../lib');
const lib = require('../../examples/__lib');
const config = require('../../examples/__config');

// ----------------------------------------------------
// Split the complex business logic into multiple small
// functions, each function is a separate file,
// this will make the code structure clear,
// easy to understand and maintain.
// ----------------------------------------------------

// Load all files in folder "flow" and save to object me
const me = require('rir')(module, './flow');

// The execution result is the same as previous example
const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// Pass lib to all functions, cool!
	// There are no need to load the lib file in every file
	// We can use this.xxx instead of lib.xxx in all functions
	const result = await kdo(me, args, {lib});

	return result;
};

module.exports = fn;
