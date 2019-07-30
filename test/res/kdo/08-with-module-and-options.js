
const kdo = require('../../../src');

const verify = (obj) => {
	return typeof obj['dir-x'].test.hi === "undefined";
};

const run = async () => {

	// Kdo will requires all files (exclude hi.js) in the directory which
	// this file is located to be an object.

	const obj = kdo(module, {exclude: 'hi.js'});
	return obj;
};

const info = {verify, run};
module.exports = info;
