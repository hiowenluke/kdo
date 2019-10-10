
// Require the sub-directory as a function which wrapped by kdo.
// Means, the sub-directory is a fully independent module, the main
// function does not needs to care about the details of it, just call it.
const flow = require('./01-flow');

const expect = 'f1f2f3';

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};

	// Execute the flow function, get the result.
	const result = await flow(args);

	return result === expect;
};

module.exports = fn;
