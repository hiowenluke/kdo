
const config = require('../config');
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const args = config.init();

	// Use options {return: 'a2'} to make kdo to return 'a2' argument
	const k = kdo.new(args, {return: 'a2'});

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	const result = await k.do();
	config.log('[kdo result]', 'a2 =', result);

	return result;
};

module.exports = fn;
