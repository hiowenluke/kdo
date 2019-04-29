
const KDO = require('./KDO');

const fn = (...args) => {
	const inst = Object.create(KDO);
	inst.__init(...args);
	return inst;
};

module.exports = fn;
