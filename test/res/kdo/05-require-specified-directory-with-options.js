
const kdo = require('../../../src');

const verify = (obj) => {
	return typeof obj['dir-x'].test.hi === "undefined";
};

const run = async () => {
	const options = {exclude: 'hi.js'};
	const obj = kdo(options);
	return obj;
};

const info = {verify, run};
module.exports = info;
