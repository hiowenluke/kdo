
const kdo = require('../../../src');
const test03 = require('./03-require-specified-directory');

const verify = (obj) => {
	return test03.verify(obj);
};

const run = async () => {
	const obj = kdo('./dir-x/test');
	return obj;
};

const info = {verify, run};
module.exports = info;
