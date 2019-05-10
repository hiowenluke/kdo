
const fn = (args, options) => {
	const {skipIfNo} = options;
	if (!skipIfNo) return false;

	const nodes = skipIfNo.split('.');
	const root = args[nodes[0]];
	if (!root) return true;

	let checker = root;
	for (let i = 1; i < nodes.length; i ++) {
		const node = nodes[i];
		if (!checker[node]) return true;

		if (!checker[node]) checker[node] = {};
		checker = checker[node];
	}

	return false;
};

module.exports = fn;
