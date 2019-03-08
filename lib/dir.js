
const fn = (kdo, module, opt) => {
	const dir = async (args, next) => {
		const result = await kdo(module, args, opt);

		if (typeof next === 'function') {
			await next();
		}
		else {
			return result;
		}
	};

	return dir;
};

module.exports = fn;
