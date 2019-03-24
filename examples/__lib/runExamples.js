
const fs = require('fs');

const printTitle = (exampleName) => {
	console.log('-'.repeat(50));
	console.log(exampleName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const fn = async (module) => {

	// try { // for debugging only

	const filePath = module.filename;  // /kdo/examples/advanced-features/run.js
	const runner = filePath.match(/\/?([a-zA-Z]+\.js)$/)[1]; // run.js
	const root = filePath.replace(/\/?[a-zA-Z]+\.js$/, ''); // /kdo/examples/advanced-features

	const exampleNames = fs.readdirSync(root);
	for (let i = 0; i < exampleNames.length; i++) {
		const exampleName = exampleNames[i];

		// ignore runner and hidden files
		if (exampleName === runner || exampleName.substr(0, 1) === '.') continue;
		printTitle(exampleName);

		const exampleFn = require(root + '/' + exampleName);
		await exampleFn();

		// console.log('done');
	}

	// } catch (e) { console.log(e) }
};

module.exports = fn;
