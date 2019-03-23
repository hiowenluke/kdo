
const flow = require('./04-flow');

const verify = (value) => {

	// this value was returned from ./04-flow/flow1/flow12/f122.js
	return value === 123;
};

const run = async () => {
	const args = {str: ''};
	const options = {return: 'str'};
	const result = await flow(args, options);
	return result;
};

const info = {verify, run};
module.exports = info;
