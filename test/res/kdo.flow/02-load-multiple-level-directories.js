
const flow = require('./02-flow');

const expect = 'f11f121f122f123f13f14f15f21f22f23f31f32f33f4f5';

const fn = async () => {

	// set the initial value of args.str
	const args = {str: ''};

	// the value of args.str will be changed in flow
	await flow(args);

	return args.str === expect;
};

module.exports = fn;
