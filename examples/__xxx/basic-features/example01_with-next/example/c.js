
const lib = require('../lib');

const fn = async ({a1}, next) => {
	await lib.doSomething(module);
	await next();
};

module.exports = fn;
