
const log = require('./log');
const getModuleName = require('./getModuleName');

const fn = (module) => {
	const modname = getModuleName(module);
	log(modname + ' do something...');
};

module.exports = fn;
