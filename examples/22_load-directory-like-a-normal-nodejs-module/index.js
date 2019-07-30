
// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// Load the entire flow directory like a normal node.js module,
// the parent doesn't need to care about the details in flow.
const flow = require('./flow');

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return result;
};

module.exports = fn;
