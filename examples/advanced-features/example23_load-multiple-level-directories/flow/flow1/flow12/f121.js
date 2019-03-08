
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}) {

	const val = 5;
	this.setArgs({a1: val});

	this.doSomething(this.fnName);
	this.log(`a1 = ${val}`);
};

module.exports = fn;
