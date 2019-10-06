
const flow = require('./07-flow');

const expect = 'f3f1f2f6f7f4';

const fn = async () => {
	const args = {a1: 1, a2: 2, a3: 3};
	const result = await flow(args);
	return result === expect;
};

module.exports = fn;
