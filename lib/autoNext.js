
const updateArgs = (args, updater) => {
	Object.keys(updater).forEach(key => {
		if (typeof args[key] === 'undefined') return;
		args[key] = updater[key];
	});
};

const fn = (fn) => {
	return async (args, next) => {
		args = args || {};

		const result = await fn(args);
		const isContinue = typeof result === 'undefined';
		const isBreak = result === 'break' || result === true;
		const isUpdateArgs = typeof result === 'object' && typeof result.args === 'object';
		const isReturnResult = !isUpdateArgs;

		if (isContinue){
			return await next();
		}

		if (isBreak) {
			return;
		}

		if (isUpdateArgs) {
			debugger;
			updateArgs(args, result.args);
			return await next(args);
		}

		if (isReturnResult) {
			return result;
		}
	};
};

module.exports = fn;
