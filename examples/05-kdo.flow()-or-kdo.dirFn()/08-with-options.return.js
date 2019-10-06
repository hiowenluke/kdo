
const flow = require('./08-flow');

const expect = 'f11f121f122f123f13f14f15f21f22f23f31f32f33f4f5';

const fn = async () => {
	const args = {str: ''};
	const options = {return: 'str'};
	const result = await flow(args, options);
	return result === expect;
};

module.exports = fn;
