
const flow = require('./11-flow');

const verify = (result) => {
	return result === 123;
};

const run = async () => {
	const options = {return: 'str'};
	const result = await flow(options);
	return result;
};

const info = {verify, run};
module.exports = info;
