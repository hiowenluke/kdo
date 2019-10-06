
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

	// Kdo will requires all files in the directory which the __dirname is located to be an object
	const obj = kdo(__dirname);
	return verify(obj);
};

module.exports = fn;
