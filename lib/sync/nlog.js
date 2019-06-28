
const config = require('my-config');

const fn = (...args) => {
	if (config.getIsDisablePrint() || !config.getIsPrintLog()) return;
	console.log(...args);
};

module.exports = fn;
