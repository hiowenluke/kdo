
const lib = require('../lib');

// Use "function" symbol instead of arrow function for "this"
const fn = async function({a1, a2, a3}){

	await lib.doSomething(module);
	lib.log(a1, a2, a3);

	a2 = 4;
	a3 = 5;

	// Save these new values to this.args,
	// this will effective to all "next" functions.
	this.args.a2 = a2;
	this.args.a3 = a2;

	// Or do it via this.setArgs(), more simple, more cool.
	this.setArgs({a2, a3});

	// If you wanna to replace the whole this.args, use the following:
	//		this.setArgs({a1, a2, a3})

	// instead of the following:
	// 		this.args = {a1, a2, a3}
};

module.exports = fn;
