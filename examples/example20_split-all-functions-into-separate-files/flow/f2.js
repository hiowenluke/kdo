
// Don't like loading lib in every file? See example21 please
const lib = require('../../../examples/__lib');

const fn = async function({a1, a2, a3}, next) {

	// If the condition is not met, then return
	// This will go to the next function
	if (1) return await next();

	// The subsequent code will be ignored.
	lib.log(this.fnName, 'do something');
	lib.log(a1, a2, a3);

	await next();
};

module.exports = fn;
