
const flow = require('./02-flow');
const lib = require('../__lib');

const expect = 3;

const fn = async () => {
	const args = {obj: {a: 0}};
	const result = flow(args.obj);

	await lib.wait();
	return result === expect;
};

module.exports = fn;
