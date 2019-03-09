
const config = require('./config');

const fn = (...args) => {
	if (!config.getIsPrintLog()) return;
	console.log(...args);
};

module.exports = fn;
