
const lib = require('../lib');

const fn = async ({a1, a2, a3}, next) => {
	await lib.do(module);
	await next();
};

module.exports = fn;
