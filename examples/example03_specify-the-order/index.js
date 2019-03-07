
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

	let order;
	let result;

	// Specify the execution order with multi-lines text (even including comments).
	// Those functions which not in here will be ignored.
	order = `
		f3 // this is a comment
		f2 // this is a comment
		f5 // this is a comment
		f4 // this is a comment
	`;

	// This is equal to the following:
	// order = `
	// 	f3, // this is a comment
	// 	f2, // this is a comment
	// 	f5, // this is a comment
	// 	f4, // this is a comment
	// `;

	// And the following:
	// order = [
	// 	'f3', // this is a comment
	// 	'f2', // this is a comment
	// 	'f5', // this is a comment
	// 	'f4', // this is a comment
	// ];

	// Now, pass the order to kdo, cool!
	result = await kdo(me, order);

	// This is equal to the following:
	// result = await kdo(me, {order});

	return result;
};

module.exports = fn;
