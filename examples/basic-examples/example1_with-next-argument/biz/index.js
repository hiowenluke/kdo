
const kdo = require('../../../../lib');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	// execute the functions in me in the order of a, b, c, d, e, etc.
	// or other order such as b, c, d, a, e, etc. if needed.
	k.use(me.a);
	k.use(me.b);
	k.use(me.c);
	k.use(me.d);
	k.use(me.e);
	k.use(me.f);
	k.use(me.g);

	// me.h will not be executed 'cause the following code is commented.
	// k.use(me.h);

	await k.do();

	return true;
};

module.exports = fn;
