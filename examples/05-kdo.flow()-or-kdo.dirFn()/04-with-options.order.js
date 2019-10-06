
const flow = require('./04-flow');

const expect = 'f3f4f2f1';

const fn = async () => {
	const result = await flow();
	return result === expect;
};

module.exports = fn;
