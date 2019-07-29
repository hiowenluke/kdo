
const kdo = require('../../lib');

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

	let order;
	let result;

	// Specify the execution order with multi-lines text (even including comments).
	// Those functions which not in here will be ignored.
	order = `
		f3
		f2, // the comma can be omitted
		f5
		f4
	`;

	// This is equal to the following:
	// order = [
	// 	'f3',
	// 	'f2',
	// 	'f5',
	// 	'f4',
	// ];

	// Now, pass the order to kdo, cool!
	result = await kdo.do(flow, order);

	// This is equal to the following:
	// result = await kdo.do(flow, {order});

	// and the following:
	// const options = {order};
	// result = await kdo.do(flow, options);

	return result;
};

module.exports = fn;
