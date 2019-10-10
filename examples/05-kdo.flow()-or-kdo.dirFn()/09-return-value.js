
// require the sub-directory as a function which wrapped by kdo
const flow = require('./09-flow');

const expect = 123;

const fn = async () => {
	const args = {str: ''};

	// Execute the kdo flow and return 123 from ./09-flow/flow1/flow12/f122.js
	const result = await flow(args);
	return result === expect;
};

module.exports = fn;

// The main function and sub-functions (tasks) are very clean,
// each of one is completely independent, and have no redundant
// logic interference, easy to read and maintain.
