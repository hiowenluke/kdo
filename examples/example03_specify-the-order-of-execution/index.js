
const kdo = require('../../lib');
const lib = require('../../examples/__lib');
const config = require('../../examples/__config');

// ----------------------------------------------------
// Use an object such as "me" or "flow" to organize functions.

// This means that we can split the complex business
// logic into multiple small functions, making the code
// structure clear, easy to understand and maintain.

// This is a good habit.
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

	// Specify the execution order using multiple lines of text (and even including comments).
	// Those functions which not in the text will be ignored.
	const result = await kdo(me, `
		f3 // this is a comment
		f2 // this is a comment
		f5 // this is a comment
		f4 // this is a comment
	`);

	// This is equal to the following:
	// const result = await kdo(me, [
	// 	'f3', // this is a comment
	// 	'f2', // this is a comment
	// 	'f5', // this is a comment
	// 	'f4', // this is a comment
	// ]);

	// and the following:
	// const result = await kdo(me, {order: `
	// 	f3 // this is a comment
	// 	f2 // this is a comment
	// 	f5 // this is a comment
	// 	f4 // this is a comment
	// `});

	// and the following:
	// const result = await kdo(me, {order: [
	// 	'f3', // this is a comment
	// 	'f2', // this is a comment
	// 	'f5', // this is a comment
	// 	'f4', // this is a comment
	// ]});

	return result;
};

module.exports = fn;