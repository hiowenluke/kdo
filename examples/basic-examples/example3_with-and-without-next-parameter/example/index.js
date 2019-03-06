
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	await k.do();

	return true;
};

module.exports = fn;
