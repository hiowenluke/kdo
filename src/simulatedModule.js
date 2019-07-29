
const me = {

	isArgFlowExists(args) {
		const flow = args[0];
		if (!flow) return false;

		const keys = Object.keys(flow);
		return typeof flow[keys[0]] === 'function';
	},

	addToArgs(args, pathToCaller) {

		const simulateModule = {
			filename: pathToCaller.replace(/\/\s+?\.js$/i, '/.'),
			isSimulatedModule: true,
		};

		args.unshift(simulateModule);
	},
};

module.exports = me;
