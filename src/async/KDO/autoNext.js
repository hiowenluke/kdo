
const updateArgs = (args, updater) => {
	Object.keys(updater).forEach(key => {
		if (typeof args[key] === 'undefined') return;
		args[key] = updater[key];
	});
};

const getStatus = (result) => {

	// Only typeof result === 'undefined' means no result returned.
	// If the result is null, it is also a result, and it will break the flow.
	const isContinue = typeof result === 'undefined';
	const isBreak = result === 'break' || result === true;

	// Check the value of result first, 'cause typeof null === 'object' too
	const isContinueWithUpdateArgs = result && typeof result === 'object' && typeof result.args === 'object';
	const isBreakWithReturnResult = !isContinueWithUpdateArgs;

	return {isContinue, isContinueWithUpdateArgs, isBreak, isBreakWithReturnResult};
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
		const status = getStatus(result);

		if (status.isContinue){
			return await next(args);
		}

		if (status.isContinueWithUpdateArgs) {
			updateArgs(args, result.args);
			return await next(args);
		}

		if (status.isBreak) {
			// Return true so that the caller can break flow too
			return true;
		}

		if (status.isBreakWithReturnResult) {
			// Return the result and break flow
			return result;
		}
	};

	nextFn.myName = fnName;
	return nextFn;
};

module.exports = fn;
