
// Don't like loading lib in every file? See next example please
const lib = require('../../../examples/__lib');

// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {

	if (1) return;

	this.log(this.fnName, 'do something');
	this.log(a2, a3);

	await lib.wait();
};

module.exports = fn;