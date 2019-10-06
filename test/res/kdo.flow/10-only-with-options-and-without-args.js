
const flow = require('./10-flow');

const expect = 'f3f1f2';

const fn = async () => {
	const options = {return: 'str'};
	const result = await flow(options);
	return result === expect;
};

module.exports = fn;
