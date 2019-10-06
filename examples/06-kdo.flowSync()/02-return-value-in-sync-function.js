
const flow = require('./02-flow');

const expect = 3;

const fn = () => {
	const args = {obj: {a: 0}};
	const result = flow(args.obj);
	return result === expect;
};

module.exports = fn;
