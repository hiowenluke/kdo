
const flow = require('./02-flow');

const verify = (value) => {
	return value === 3;
};

const run = () => {
	const args = {obj: {a: 0}};
	const result = flow(args.obj);
	return result;
};

const info = {verify, run};
module.exports = info;
