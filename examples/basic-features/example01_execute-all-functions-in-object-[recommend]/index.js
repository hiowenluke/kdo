
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using the object "flow" or "me" to organize functions,
// we can split the complex logic into multiple small functions,
// which will make the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}, next) {

		// The this.fnName is name of the current function,
		// for example, it's "f1" in this case
		lib.log(this.fnName, 'do something');
		lib.log(a1, a2, a3);

		// Call next() to go to the next function
		await next();
	},

	async f2({a1, a2, a3}, next) {

		// If the condition is not met, then return
		// This will go to the next function
		if (1) return await next();

		// The subsequent code will be ignored.
		lib.log(this.fnName, 'do something');
		lib.log(a1, a2, a3);

		await next();
	},

	async f3({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

		// This function has no next parameter (recommend),
		// kdo will automatically go to the next function, cool!
	},

	async f4({a2, a3}) {

		// If the condition is not met, then return, and
		// kdo will automatically go to the next function, cool!
		if (1) return;

		// The subsequent code will be ignored
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);
	},

	async f5() {
		lib.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	// Print function name with indent for demo automatically
	kdo.config({isPrintTree: true});

	// Load arguments from config
	const args = config.init();

	// Execute all functions in flow in the original order and
	// pass arguments to all functions via args
	const result = await kdo(flow, args);
	lib.log('args =', args);

	return result;
};

module.exports = fn;
