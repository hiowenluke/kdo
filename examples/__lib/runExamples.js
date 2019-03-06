
const requireDirectory = require('rir');

const printTitle = (exampleName) => {
	console.log('-'.repeat(50));
	console.log(exampleName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const fn = async (module) => {

	try { // for debugging only

	const examples = requireDirectory(module, {include: 'main', exclude: 'index'});
	const exampleNames = Object.keys(examples);
	for (let i = 0; i < exampleNames.length; i++) {
		const exampleName = exampleNames[i];
		printTitle(exampleName);

		const exampleFn = examples[exampleName].main;
		await exampleFn();
	}

	} catch (e) { console.log(e) }
};

module.exports = fn;
