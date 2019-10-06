
const flow = require('./01-flow');

const expect = '<f121>[f13]|f23|';

const fn = async () => {
	const args = {str: ''};
	const options = {return: 'str'};

	const result = await flow(args, options);
	return result === expect;
};

module.exports = fn;
