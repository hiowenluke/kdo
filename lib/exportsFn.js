
const tools = require('./tools');

const exportsFn = (obj, options, returnParam, kdo) => {
	if (!tools.isModule(obj)) return;

	let options_, returnParam_;

	// The 2nd param is options
	if (tools.isOptions(options)) {
		options_ = options;
	}
	else {
		// The 2nd param is returnParam
		if (tools.isReturnParam(options)) {
			returnParam_ = options;
		}
	}

	// The 2nd param is options or returnParam,
	// that's means it requires to create an exports fn, then do it
	if (options_ || returnParam_) {

		// The 3rd param is returnParam
		if (!returnParam_ && tools.isReturnParam(returnParam)) {
			returnParam_ = returnParam;
		}

		const fn = function() {
			return async (args, next) => {
				await kdo(obj, args, options_, returnParam_);
				next && await next();
			};
		};

		return fn;
	}
};

module.exports = exportsFn;
