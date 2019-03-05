
const requireDirectory = require('rir');

const printTitle = (demoName) => {
	console.log('-'.repeat(50));
	console.log(demoName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const fn = async (module) => {

	// try { // for debugging only

	const demos = requireDirectory(module, {include: 'main', exclude: 'index'});
	const demoNames = Object.keys(demos);
	for (let i = 0; i < demoNames.length; i++) {
		const demoName = demoNames[i];
		printTitle(demoName);

		const demoFn = demos[demoName].main;
		await demoFn();
	}

	// }
	// catch (e) {
	// 	console.log(e);
	// }
};

module.exports = fn;
