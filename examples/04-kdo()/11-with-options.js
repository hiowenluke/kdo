
const kdo = require('../../src');

const verify = (obj) => {
	return typeof obj['dir-x'].test.hi === "undefined";
};

const fn = async () => {

	// Kdo will requires all files (exclude hi.js) in the directory which
	// this file is located to be an object.

	const obj = kdo({exclude: 'hi.js'});
	return verify(obj);
};

module.exports = fn;
