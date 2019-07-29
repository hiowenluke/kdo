
const kdo = require('../../../src');
const test01 = require('./01-require-current-directory-to-be-an-object');

const verify = (obj) => {
	return test01.verify(obj);
};

const run = async () => {
	const obj = kdo(module);
	return obj;
};

const info = {verify, run};
module.exports = info;
