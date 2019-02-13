
const tools = require('../tools');

const fixArguments = {
	do(args) {
		args = this.fixSortingRule(args);
		args = this.fixReturnParam(args);
		args = this.fixLib(args);

		return args;
	},

	fixSortingRule({sortingRule, returnParam, lib}) {
		const arg = sortingRule;

		if (!tools.isSortingRule(arg)) {
			if (tools.isReturnParam(arg)) {
				returnParam = arg;
			}
			else if (tools.isLib(arg)){
				lib = arg;
			}

			// Important: use undefined instead of null.
			// Because the default value of argument will not be effective if the argument is null.
			sortingRule = undefined;
		}

		return {sortingRule, returnParam, lib};
	},

	fixReturnParam({sortingRule, returnParam, lib}) {
		const arg = returnParam;

		if (!tools.isReturnParam(arg)) {
			if (tools.isLib(arg)){
				lib = arg;
			}

			returnParam = undefined;
		}

		return {sortingRule, returnParam, lib};
	},

	fixLib({sortingRule, returnParam, lib}) {
		const arg = lib;

		if (!tools.isLib(arg)) {
			lib = undefined;
		}

		return {sortingRule, returnParam, lib};
	}
};

module.exports = fixArguments;
