
const path = require('path');
const kdo = require('../../../src');
const test01 = require('./01-require-current-directory-to-be-an-object');

const verify = (obj) => {
	return (

		typeof obj.hi === 'object' &&
		typeof obj.hi.hi === 'string' &&
		typeof obj.ok === 'string' &&

		test01.verify(obj) &&

	true);
};

const run = async () => {

	// Note that the prefix of path is ".." instead of ".":
	//		"." 	refers to ".../test/res/kdo/03-require-specified-directory.js"
	//		".." 	refers to ".../test/res/kdo
	const filename = path.resolve(module.filename, '../dir-x/test/hi.js');

	// Kdo will require the directory which the hi.js is located as an object
	const obj = kdo({filename});
	return obj;
};

const info = {verify, run};
module.exports = info;
