
const config = require('../config');
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const args = config.init();
	const k = kdo.new(args);

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	const result = await k.do();
	config.log('[kdo result]', result);

	return result;
};

module.exports = fn;
