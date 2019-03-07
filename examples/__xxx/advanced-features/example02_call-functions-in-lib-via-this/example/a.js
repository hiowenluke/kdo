
// no longer needed
// const lib = require('../lib');

const fn = async function() {

	await this.doSomething(module); // cool
	// await lib.doSomething(module); // no longer needed

	this.log('hi'); // cool
	// lib.log('hi'); // no longer needed

};

module.exports = fn;
