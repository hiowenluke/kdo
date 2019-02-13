
const tools = require('./tools');

const fn = (module, options, lib, kdo) => {
	if (!tools.isModule(module)) return;

	// If the 2nd param is NOT options, then maybe it's lib
	if (!tools.isOptions(options)) {

		// If the 2nd param is lib
		if (tools.isLib(options)) {
			lib = options;
		}

		options = null;
	}

	const fn = async (args, next) => {
		await kdo(module, args, options, lib);
		typeof next === 'function' && await next();
	};

	return fn;
};

module.exports = fn;
