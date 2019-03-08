
const config = require('../../../../../__config');

const fn = (fnName) => {
	config.log(fnName, 'do something in flow1...');
};

module.exports = fn;
