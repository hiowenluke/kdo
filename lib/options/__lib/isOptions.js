
const check = {
	isSortingRule(opt) {

		// Check if some key was found
		const key = ['order', 'first', 'last', 'exclude'].find(key => {
			if (typeof opt[key] !== 'undefined') return true;
		});

		return !!key;
	},

	isReturnParam(opt) {
		return opt && opt.return && typeof opt.return === 'string';
	},

	isLib(opt) {
		return opt && opt.lib && typeof opt.lib === 'object';
	},

	isKdo(opt) {
		return opt && opt.kdo && typeof opt.kdo === 'object';
	}
};

const fn = (opt) => {

	// If opt is a string or an array, means it's options.order
	if (typeof opt === 'string' || Array.isArray(opt)) return true;
	if (!opt || typeof opt !== 'object') return false;

	return check.isSortingRule(opt) || check.isReturnParam(opt) || check.isLib(opt) || check.isKdo(opt);
};

module.exports = fn;
