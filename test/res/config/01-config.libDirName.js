
const flow = require('./01-flow');

const verify = (result) => {
	return result === '<f121>[f13]|f23|';
};

const run = () => {
	const args = {str: ''};
	const options = {return: 'str'};
	const result = flow(args, options);
	return result;
};

const info = {verify, run};
module.exports = info;
