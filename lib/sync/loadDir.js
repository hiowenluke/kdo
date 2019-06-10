
const requireDirectory = require('rir');

const fn = (...args) => {
	return requireDirectory(...args);
};

module.exports = fn;
