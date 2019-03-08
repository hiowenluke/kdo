
// Don't like loading lib in every file? See next example please
const lib = require('../../../../examples/__lib');

// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}, next) {

	// The this.fnName is name of the current function,
	// for example, it's "f1" in this case
	lib.log(this.fnName, 'do something');
	lib.log(a1, a2, a3);

	// Call next() to go to the next function
	await next();
};

module.exports = fn;

