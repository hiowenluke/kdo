
const kdo = require('../../src');

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
	},

	async f6() {
		this.log(this.fnName, 'do something');
	},

	async f7() {
		this.log(this.fnName, 'do something');
	},

	async f8() {
		this.log(this.fnName, 'do something');
	},

	async f9() {
		this.log(this.fnName, 'do something');
	},

	async f10() {
		this.log(this.fnName, 'do something');
	},
};

const fn = async () => {

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

	const result = await kdo.do(flow, options);
	return result;
};

module.exports = fn;
