
const lib = require('rir')(module, '..');

const fn = (module) => {
	lib.doSomething(module);
};

module.exports = fn;
