
const flow = require('./01-flow');
const lib = require('../__lib');

const expect = 3;

const fn = async () => {
	const args = {obj: {a: 0}};
	flow(args.obj);

	await lib.wait();
	return args.obj.a === expect;
};

module.exports = fn;
