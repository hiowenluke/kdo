
const lib = require('../lib');

const fn = async ({a1, a2}, next) => {
	await lib.doSomething(module);
	await next();
};

module.exports = fn;
