
const fn = (args) => {
	const flow = args[0];
	if (!flow) return false;

	const keys = Object.keys(flow);
	return typeof flow[keys[0]] === 'function';
};

module.exports = fn;
