
const kdo = require('../../../lib');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1() {
		this.log(this.fnName, 'do something');
	},

	async f2() {
		this.log(this.fnName, 'do something');
	},

	async f3() {
		this.log(this.fnName, 'do something');
	},

	async f4() {
		this.log(this.fnName, 'do something');
	},

	async f5() {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// For options, see example51 in options-features
	const k = kdo.new(args);

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(flow.f1);
	k.use(flow.f4);
	k.use(flow.f2);
	k.use(flow.f3);

	// Or load all functions in flow if we do not need to specify the order one by one.
	// Uncomment the code below (and comment the code k.use() above) to see the effect:
	// k.use(flow);

	// Execute all loaded functions
	const result = await k.do();
	return result;

	// ----------------------------------------------------
	// See the files below to see the actual application of kdo.new:
	// 		/kdo/lib/options/initAll.js
	// 		/kdo/lib/options/initSortingRules.js
	// ----------------------------------------------------
};

module.exports = fn;
