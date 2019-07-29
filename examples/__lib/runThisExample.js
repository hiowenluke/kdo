
const path = require('path');
const caller = require('caller');

const kdo = require('../../lib');
kdo.config(false, '__lib');

/* @name lib.runThisExample */
const fn = async () => {

	// try { // for debugging only

	const pathToCaller = caller();
	const examplePath = path.resolve(pathToCaller, '../');

	const exampleFn = require(examplePath);
	await exampleFn();

	// } catch (e) { console.log(e) }
};

module.exports = fn;
