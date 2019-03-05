
const kdo = require('../../../../lib');
const me = require('rir')(module); // load all files in current directory

const fn = async (args) => {

	const k = kdo.new(args);

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	return await k.do();
};

module.exports = fn;