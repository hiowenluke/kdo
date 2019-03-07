
const lib = require('../lib');

const fn = () => {
	if (1) return;
	lib.doSomething.sync(module);
};

module.exports = fn;
