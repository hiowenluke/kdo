
const config = require('../__config');

const fn = (...args) => {
	if (config.getIsDisablePrint() || !config.getIsPrintLog()) return;
	console.log(...args);
};

module.exports = fn;
