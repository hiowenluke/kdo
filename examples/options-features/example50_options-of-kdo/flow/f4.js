
// Don't like loading lib in every file? See next example please
const lib = require('../../../../examples/__lib');

// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {

	// If the condition is not met, then return, and
	// kdo will automatically go to the next function, cool!
	if (1) return;

	// The subsequent code will be ignored
	lib.log(this.fnName, 'do something');
	lib.log(a2, a3);
};

module.exports = fn;
