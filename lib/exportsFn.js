
const tools = require('./tools');

const fn = (module, sortingRule, lib, kdo) => {
	if (!tools.isModule(module)) return;

	// If the 2nd param is NOT sortingRule, then maybe it's lib
	const arg2 = sortingRule;
	if (!tools.isSortingRule(arg2)) {

		// If the 2nd param is lib
		if (tools.isLib(arg2)) {
			lib = arg2;
		}

		sortingRule = null;
	}

	const fn = async (args, next) => {
		const result = await kdo(module, args, sortingRule, lib);

		if (typeof next === 'function') {
			await next();
		}
		else {
			return result;
		}
	};

	return fn;
};

module.exports = fn;
