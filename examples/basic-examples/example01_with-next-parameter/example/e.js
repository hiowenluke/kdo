
const lib = require('../lib');

const fn = async ({}, next) => {
	await lib.do(module);
	await next();
};

module.exports = fn;
