
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Using an object such as "flow" or "me" to organize
// functions, we can split the complex logic into multiple
// small functions, which will make the code structure
// clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1() {
		lib.log(this.fnName, 'do something');
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
	},

	async f8() {
		lib.log(this.fnName, 'do something');
	},

	async f9() {
		lib.log(this.fnName, 'do something');
	},

	async f10() {
		lib.log(this.fnName, 'do something');
	},
};

const fn = async () => {

	kdo.config({isPrintTree: true});

	// Specify the executing order, cool!
	const options = {

		first: [
			'f6',
			'f3',
		],

		last: [
			'f2',
			'f4'
		],

		exclude: [
			'f5',
			'f9'
		],

		// The other functions which not in above will be executed
		// after "first" and before "last" with in original order (by alphabet)
	};

	const result = await kdo(flow, options);
	return result;
};

module.exports = fn;
