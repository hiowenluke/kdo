
const config = require('../config');
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const args = config.init();

	// Pass arguments to all functions
	const k = kdo.new(args);

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	await k.do();

	return args;
};

module.exports = fn;
