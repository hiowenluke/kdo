
const demos = require('rir')(module, {include: 'main', exclude: 'index'});

const printTitle = (demoName) => {
	console.log('-'.repeat(50));
	console.log(demoName.replace(/_/, ': ').replace(/-/g, ' '));
	console.log('-'.repeat(50));
};

const main = async () => {
	const demoNames = Object.keys(demos);
	for (let i = 0; i < demoNames.length; i ++) {
		const demoName = demoNames[i];
		printTitle(demoName);

		const demoFn = demos[demoName].main;
		await demoFn();
	}
};

main();
