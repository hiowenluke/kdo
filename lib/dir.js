
let kdo;

const fn = (module, opt) => {

	// Initialize kdo here, avoiding mutual references with ./do
	kdo = kdo || {
		do: require('./do')
	};

	const dir = async (args, next) => {
		const result = await kdo.do(module, args, opt);

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
