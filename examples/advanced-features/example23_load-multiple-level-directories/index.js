
const kdo = require('../../../lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Split complex logic into multiple small functions,
// each function is saved as a separate file,

// and these files are stored in multiple directories
// (even with multiple-level if needed), this makes
// the code structure clear, easy to understand and maintain.

// Yes, we can easily build complex projects with kdo.
// ----------------------------------------------------

// Load flow like a normal node.js module,
// we don't care the details in flow.
const flow = require('./flow');

const fn = async () => {

	const args = config.init();
	await flow(args);

	// The value of a1 was set multiple times, and the last time is 8.
	// Now we regain the value of a1, it is 8, which means that
	// the execution order in flow is completely correct.
	kdo.log('a1 is', args.a1, '// <= correct');

	return args;
};

module.exports = fn;
