
const kdo = require('../../../../lib');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const k = kdo.new();

	// specify the order with b, c, a
	k.use(me.b);
	k.use(me.c);
	k.use(me.a);

	await k.do();

	return true;
};

module.exports = fn;
