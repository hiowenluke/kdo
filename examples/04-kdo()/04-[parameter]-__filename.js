
const kdo = require('../../src');
const test01 = require('./01-require-current-directory-to-be-an-object');

const verify = (obj) => {
	return (

		typeof obj['dir-x'].test.hi === 'object' &&
		typeof obj['dir-x'].test.hi.hi === 'string' &&
		typeof obj['dir-x'].test.ok === 'string' &&

		test01.verify(obj) &&

	true);
};

const fn = async () => {

	// Kdo will requires the directory which the __filename is located as an object
	// Note that the __filename self will not be required.

	const obj = kdo(__filename);
	return verify(obj);
};

module.exports = fn;
