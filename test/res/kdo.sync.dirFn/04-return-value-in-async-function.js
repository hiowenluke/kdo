
const flow = require('./02-flow');
const lib = require('my-test-lib');

const verify = (value) => {
	return value === 3;
};

const run = async () => {
	const args = {obj: {a: 0}};
	const result = flow(args.obj);

	await lib.wait();
	return result;
};

const info = {verify, run};
module.exports = info;
