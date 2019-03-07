
const lib = require('../lib');

const fn = async ({}, next) => {
	await lib.doSomething(module);
	await next();
};

module.exports = fn;
