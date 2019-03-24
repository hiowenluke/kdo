
const flow = require('./04-flow');

const verify = (result) => {
	return result === 'f3f4f2f1';
};

const run = async () => {
	const result = await flow();
	return result;
};

const info = {verify, run};
module.exports = info;
