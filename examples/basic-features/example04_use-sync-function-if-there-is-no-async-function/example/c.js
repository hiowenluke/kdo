
const lib = require('../lib');

const fn = () => {
	lib.doSomething.sync(module);
};

module.exports = fn;
