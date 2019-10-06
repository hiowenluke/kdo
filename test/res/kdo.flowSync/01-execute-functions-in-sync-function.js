
const flow = require('./01-flow');

const expect = 3;

const fn = () => {
	const args = {obj: {a: 0}};
	flow(args.obj);
	return args.obj.a === expect;
};

module.exports = fn;
