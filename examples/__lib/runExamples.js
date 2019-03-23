
const fs = require('fs');

const printTitle = (exampleName) => {
	console.log('-'.repeat(50));
	console.log(exampleName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const fn = async (module) => {

	// try { // for debugging only

	const filename = module.filename;
	const root = filename.replace(/\/index\.js$/, '');

	const exampleNames = fs.readdirSync(root);
	for (let i = 0; i < exampleNames.length; i++) {
		const exampleName = exampleNames[i];
		if (exampleName === 'index.js' || exampleName.substr(0, 1) === '.') continue;

		printTitle(exampleName);

		const exampleFn = require(root + '/' + exampleName);
		await exampleFn();

		console.log('done');
	}

	// } catch (e) { console.log(e) }
};

module.exports = fn;
