
const fn = (kdo, module, options) => {

	const fn = async (args, next) => {
		const result = await kdo(module, args, options);

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
