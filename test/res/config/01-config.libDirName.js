
const flow = require('./01-flow');

const verify = (value) => {
	return value === '<f121>[f13]|f23|';
};

const run = async () => {
	const args = {str: ''};
	const options = {return: 'str'};
	const result = await flow(args, options);
	return result;
};

const info = {verify, run};
module.exports = info;
