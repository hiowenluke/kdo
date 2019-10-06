
const path = require('path');
const kdo = require('../../src');
const test01 = require('./01-require-current-directory-to-be-an-object');

const verify = (obj) => {
	return (
		typeof obj.ok === 'string' &&
		test01.verify(obj) &&

	true);
};

const fn = async () => {

	// Note that the prefix of path is ".." instead of ".":
	//		"." 	refers to ".../test/res/kdo/03-require-specified-directory.js"
	//		".." 	refers to ".../test/res/kdo
	const filename = path.resolve(module.filename, '../dir-x/test/hi.js');

	// Kdo will requires the directory which the hi.js is located as an object.
	// Note that the hi.js self will not be required.

	const obj = kdo({filename});
	return verify(obj);
};

fn.verify = verify;
module.exports = fn;
