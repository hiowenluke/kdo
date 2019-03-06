
const lib = require('../lib');
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	// Pass lib to all functions, cool!
	// They are no longer have to load the lib file on their own.
	const k = kdo.new({lib});

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	await k.do();

	return true;
};

module.exports = fn;
