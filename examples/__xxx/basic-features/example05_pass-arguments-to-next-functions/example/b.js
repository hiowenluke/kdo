
const lib = require('../lib');

const fn = async ({a1, a2, a3}) => {
	await lib.doSomething(module);
	lib.log(a1, a2, a3);
};

module.exports = fn;
