
const tools = require('./tools');

const fn = (module, sortingRule, lib, kdo) => {
	if (!tools.isModule(module)) return;

	// If the 2nd param is NOT sortingRule, then maybe it's lib
	if (!tools.isSortingRule(sortingRule)) {

		// If the 2nd param is lib
		if (tools.isLib(sortingRule)) {
			lib = sortingRule;
		}

		sortingRule = null;
	}

	const fn = async (args, next) => {
		await kdo(module, args, sortingRule, lib);
		typeof next === 'function' && await next();
	};

	return fn;
};

module.exports = fn;
