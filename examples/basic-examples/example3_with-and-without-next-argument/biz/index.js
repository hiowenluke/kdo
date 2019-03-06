
const kdo = require('../../../../lib');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	// execute in the order of a, b, c, d, etc.,
	// or other order such as b, c, d, a if needed
	k.use(me.a);
	k.use(me.b);
	k.use(me.c);
	k.use(me.d);

	await k.do();

	return true;
};

module.exports = fn;
