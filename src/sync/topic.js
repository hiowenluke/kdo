
const log = require('./log');

const fn = (...args) => {
	log('-'.repeat(50));
	log(...args);
	log('-'.repeat(50));
};

module.exports = fn;
