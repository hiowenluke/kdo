
// Don't like loading lib in every file? See example21 please
const lib = require('../../../examples/__lib');

const fn = async function() {
	lib.log(this.fnName, 'do something');
};

module.exports = fn;
