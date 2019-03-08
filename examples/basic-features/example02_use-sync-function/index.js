
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using the object "flow" or "me" to organize functions,
// we can split the complex logic into multiple small functions,
// which will make the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

// We can use sync function if there is no async function in flow

// NOTE:
// 		If there is at least one async function in flow,
// 		all functions must be asynchronous

const flow = {
	f1({a1, a2, a3}, next) {

		// The this.fnName is the current function name,
		// for example, it's "f1" in this case
		lib.log(this.fnName, 'do something');
		lib.log(a1, a2, a3);

		// Call next() to go to the next function
		next();
	},

	f2({a1, a2, a3}, next) {

		// If the condition is not met, then return
		// This will go to the next function
		if (1) return next();

		// The subsequent code will be ignored.
		lib.log(this.fnName, 'do something');
		lib.log(a1, a2, a3);

		next();
	},

	f3({a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);

		// This function has no next parameter (recommend),
		// kdo will automatically go to the next function, cool!
	},

	f4({a2, a3}) {

		// If the condition is not met, then return, and
		// kdo will automatically go to the next function, cool!
		if (1) return;

		// The subsequent code will be ignored
		lib.log(this.fnName, 'do something');
		lib.log(a2, a3);
	},

	f5() {
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
