
const flow = require('./01-flow');

const verify = (value) => {
	return value === 3;
};

const run = () => {
	const args = {obj: {a: 0}};
	flow(args.obj);
	return args.obj.a;
};

const info = {verify, run};
module.exports = info;
