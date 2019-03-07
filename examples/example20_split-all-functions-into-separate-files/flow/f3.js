
// Don't like loading lib in every file? See example21 please
const lib = require('../../../examples/__lib');

const fn = async function({a2, a3}) {
	lib.log(this.fnName, 'do something');
	lib.log(a2, a3);

	// This function has no next parameter (recommend),
	// kdo will automatically go to the next function, cool!
};

module.exports = fn;
