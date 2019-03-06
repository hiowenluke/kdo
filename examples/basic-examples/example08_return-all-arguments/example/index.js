
const config = require('../config');
const kdo = require('../lib/kdo');
const me = require('rir')(module); // load all files in current directory

const fn = async () => {

	const args = config.init();

	// Use options {return: 'all'} to make kdo to return all arguments
	const k = kdo.new(args, {return: 'all'});

	k.use(me.a);
	k.use(me.b);
	k.use(me.c);

	await k.do();
	config.log('[kdo result]', 'args =', args);

	return args;
};

module.exports = fn;
