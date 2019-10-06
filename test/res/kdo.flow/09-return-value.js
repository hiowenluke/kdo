
const flow = require('./09-flow');

// this value was returned from ./09-flow/flow1/flow12/f122.js
const expect = 123;

const fn = async () => {
	const args = {str: ''};
	const result = await flow(args);
	return result === expect;
};

module.exports = fn;
