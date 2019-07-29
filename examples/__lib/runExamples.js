
const fs = require('fs');

const printTitle = (exampleName) => {
	console.log('-'.repeat(50));
	console.log(exampleName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const isInvalidExample = (exampleName, examplePath) => {
	return !fs.statSync(examplePath).isDirectory() || // is not directory
		exampleName.substr(0, 1) === '.' || // is hidden file
		exampleName.substr(0, 1) === '_' // is "_xxx"
};

const fn = async (module) => {

	try { // for debugging only

	const filePath = module.filename;  // /kdo/examples/advanced-features/run.js
	const root = filePath.replace(/\/?[a-zA-Z]+\.js$/, ''); // /kdo/examples

	const exampleNames = fs.readdirSync(root);
	for (let i = 0; i < exampleNames.length; i++) {
		const exampleName = exampleNames[i];
		const examplePath = root + '/' + exampleName;

		// ignore runner and hidden files
		if (isInvalidExample(exampleName, examplePath)) continue;
		printTitle(exampleName);

		const exampleFn = require(examplePath);
		await exampleFn();
	}

	} catch (e) { console.log(e) }
};

module.exports = fn;
