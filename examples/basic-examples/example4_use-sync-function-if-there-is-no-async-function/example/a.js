
const lib = require('../lib');

const fn = ({a1, a2, a3}, next) => {
	lib.do.sync(module);
	next();
};

module.exports = fn;
