
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	// execute the functions in the order of a, b, c, etc.
	// or other order such as b, c, a, etc. if needed.
	k.use(me.a);
	k.use(me.b);
	k.use(me.c);
	k.use(me.d);

	// me.e will not be executed 'cause the following code is commented.
	// k.use(me.e);

	await k.do();

	return true;
};

module.exports = fn;
