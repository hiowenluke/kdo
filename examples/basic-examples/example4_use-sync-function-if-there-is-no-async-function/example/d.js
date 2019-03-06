
const lib = require('../lib');

const fn = () => {
	if (1) return;
	lib.do.sync(module);
};

module.exports = fn;
