
const fn = (kdo, module, opt) => {
	const fn = async (args, next) => {
		const result = await kdo(module, args, opt);

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
