
const flow = require('./11-flow');

const expect = 123;

const fn = async () => {
	const options = {return: 'str'};
	const result = await flow(options);
	return result === expect;
};

module.exports = fn;
