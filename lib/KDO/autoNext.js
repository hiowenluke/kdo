
const updateArgs = (args, updater) => {
	Object.keys(updater).forEach(key => {
		if (typeof args[key] === 'undefined') return;
		args[key] = updater[key];
	});
};

// Use "function" symbol instead of arrow function for "this"
const fn = function(fn) {
	const fnName = fn.myName;

	const nextFn = async function(args, next) {
		args = args || {};

		// Bind this to fn, important!
		fn = fn.bind(this);
		fn.myName = fnName;

		// Execute this function and get the result
		const result = await fn(args);

		const isContinue = typeof result === 'undefined';
		const isBreak = result === 'break' || result === true;
		const isUpdateArgs = typeof result === 'object' && typeof result.args === 'object';
		const isReturnResult = !isUpdateArgs;

		if (isContinue){
			return await next();
		}

		if (isBreak) {
			// Return true so that the caller can break too
			return true;
		}

		if (isUpdateArgs) {
			updateArgs(args, result.args);
			return await next(args);
		}

		if (isReturnResult) {
			return result;
		}
	};

	nextFn.myName = fnName;
	return nextFn;
};

module.exports = fn;
