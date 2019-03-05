
const KDO = require('./KDO');

const fn = (...args) => {
	const inst = Object.create(KDO);
	inst.init(...args);
	return inst;
};

module.exports = fn;
