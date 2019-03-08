
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using the object "flow" or "me" to organize functions,
// we can split the complex logic into multiple small functions,
// which will make the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
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

	// For options, see example51 in options-features
	const k = kdo.new(args);

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(flow.f1);
	k.use(flow.f7);
	k.use(flow.f4);
	k.use(flow.f2);
	k.use(flow.f3);

	// Execute all loaded functions
	const result = await k.do();

	return result;
};

module.exports = fn;
