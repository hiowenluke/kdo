
const fn = (module, sortingRule, returnParam, lib, kdo) => {

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
