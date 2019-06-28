
const flow = require('./01-flow');
const lib = require('my-test-lib');

const verify = (value) => {
	return value === 3;
};

const run = async () => {
	const args = {obj: {a: 0}};
	flow(args.obj);

	await lib.wait();
	return args.obj.a;
};

const info = {verify, run};
module.exports = info;
