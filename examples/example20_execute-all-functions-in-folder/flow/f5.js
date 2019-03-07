
// Don't like loading lib in every file? See example21 please
const lib = require('../../../examples/__lib');

// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function() {
	lib.log(this.fnName, 'do something');
};

module.exports = fn;
