
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

// The execution result is the same as example01
const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();
	const result = await kdo(me, args);

	return result;
};

module.exports = fn;