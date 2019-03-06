
const lib = require('../lib');

const fn = ({a1, a2, a3}, next) => {
	lib.doSomething.sync(module);
	next();
};

module.exports = fn;
