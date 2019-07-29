
const fn = (args, pathToCaller) => {

	// Simulate the module parameter
	const module = {
		filename: pathToCaller.replace(/\/\s+?\.js$/i, '/.'),
		isSimulatedIndexJs: true,
	};

	args.unshift(module);
};

module.exports = fn;
