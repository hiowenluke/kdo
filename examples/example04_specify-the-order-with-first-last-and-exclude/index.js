
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

	// Execute all functions in me in the specified order, cool!
	const result = await kdo(me, {

		first: [ // or 'f6' if there is only one name
			'f6',
			'f3',
		],

		last: [ // or 'f2' if there is only one name
			'f2',
			'f4'
		],

		exclude: [ // or 'f5' if there is only one name
			'f5',
			'f9'
		],

		// The other functions which not in above options
		// will be executed after "first" and before "last",
		// with in their original order
	});

	return result;
};

module.exports = fn;
