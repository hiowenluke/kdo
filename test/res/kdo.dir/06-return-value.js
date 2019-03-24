
const flow = require('./06-flow');

const verify = (value) => {

	// this value was returned from ./06-flow/flow1/flow12/f122.js
	return value === 123;
};

const run = async () => {
	const args = {str: ''};
	const result = await flow(args);
	return result;
};

const info = {verify, run};
module.exports = info;
