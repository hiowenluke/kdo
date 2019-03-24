
const flow = require('./10-flow');

const verify = (result) => {
	return result === 'f3f1f2';
};

const run = async () => {
	const options = {return: 'str'};
	const result = await flow(options);
	return result;
};

const info = {verify, run};
module.exports = info;
