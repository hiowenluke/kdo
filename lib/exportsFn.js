
const fixArguments = require('./prepare/fixArguments');
const tools = require('./tools');

const fn = (module, sortingRule, returnParam, lib, kdo) => {
	if (!tools.isModule(module)) return;

	// Fix arguments and return all of them
	({sortingRule, returnParam, lib} = fixArguments.do({sortingRule, returnParam, lib}));

	const fn = async (args, next) => {
		const result = await kdo(module, args, sortingRule, returnParam, lib);

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
