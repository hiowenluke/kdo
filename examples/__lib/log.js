
const config = require('../__config');

const fn = (...args) => {
	if (config.getIsTest()) return;
	console.log(...args);
};

module.exports = fn;
