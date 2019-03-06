
const lib = require('rir')(module, '..');

const fn = async (module) => {
	lib.doSomething(module);
	await lib.wait();
};

module.exports = fn;
