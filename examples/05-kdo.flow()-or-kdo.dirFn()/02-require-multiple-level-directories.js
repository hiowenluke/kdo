
// require the sub-directory as a function which wrapped by kdo
const flow = require('./02-flow');

const expect = 'f11f121f122f123f13f14f15f21f22f23f31f32f33f4f5';

const fn = async () => {

	// initialize the variables which will be passed to flow
	const args = {str: ''};

	// Execute the kdo flow.
	// The value of args.str will be changed in flow.
	await flow(args);

	return args.str === expect;
};

module.exports = fn;
