
const kdo = require('../../lib');
const lib = require('../../examples/__lib');
const config = require('../../examples/__config');

// ----------------------------------------------------
// Use an object such as "me" or "flow" to organize functions.

// This means that we can split the complex business
// logic into multiple small functions, making the code
// structure clear, easy to understand and maintain.
// ----------------------------------------------------
const me = {
	async f1({a1, a2, a3}) {
		lib.log(this.fnName, 'do something');
		lib.log(a1, a2, a3);
	},

	async f2() {
		lib.log(this.fnName, 'do something');
	},

	async f3() {
		lib.log(this.fnName, 'do something');
	},

	async f4() {
		lib.log(this.fnName, 'do something');
	},

	async f5() {
		lib.log(this.fnName, 'do something');
	},

	async f6() {
		lib.log(this.fnName, 'do something');
	},

	async f7() {
		lib.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();
	const k = kdo.new(args);

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(me.f1);
	k.use(me.f7);
	k.use(me.f4);
	k.use(me.f2);
	k.use(me.f3);

	// Execute all loaded functions
	const result = await k.do();

	return result;
};

module.exports = fn;
