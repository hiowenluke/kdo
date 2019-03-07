
const tools = {
	isSortingRule(opt) {
		if (!opt || typeof opt !== 'object') return false;

		// Check if some key was found
		const key = ['order', 'first', 'last', 'exclude'].find(key => {
			if (typeof opt[key] !== 'undefined') return true;
		});

		return !!key;
	},

	isReturnParam(opt) {
		if (!opt || typeof opt !== 'object') return false;

		return !!opt.return;
	},

	isLib(opt) {
		if (!opt || typeof opt !== 'object') return false;

		return !!opt.lib;
	},

	isOptions(opt) {

		// If opt is a string or an array, means it's options.order
		if (typeof opt === 'string' || Array.isArray(opt)) return true;

		return this.isSortingRule(opt) || this.isReturnParam(opt) || this.isLib(opt);
	}
};

module.exports = tools;
