
const kdo = require('../../../../lib');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);
	k.use(me.d);

	await k.do();

	return true;
};

module.exports = fn;
