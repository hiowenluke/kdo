
const kdo = require('../../lib');
const lib = require('../../examples/__lib');
const config = require('../../examples/__config');

const me = {
	async f1({a1, a2, a3}, next) {
		lib.log(a1, a2);

		// Use next to go to the next function
		await next();
	},

	async f2({a2, a3}) {
		lib.log(a2, a3);

		// This function has no next parameter,
		// kdo will automatically to go to the next function, cool!
	},

	async f3() {
		// Do something
	}
};

const fn = async () => {

	// For demo
	kdo.config({isPrintTree: true});

	// Load arguments from config
	const args = config.init();

	// Execute all functions in me in the original order
	// Pass arguments to all functions via argument "args"
	const result = await kdo(me, args);

	return result;
};

module.exports = fn;
