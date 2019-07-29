
const sortingRuleKeys = ['order', 'first', 'last', 'exclude'];
const otherKeys = ['return', 'lib', 'kdo', 'skipIfNot'];
const allKeys = sortingRuleKeys.concat(otherKeys);

const check = {
	hasIllegalKey(opt) {
		const illegalKey = Object.keys(opt).find(key => allKeys.indexOf(key) === -1);
		return !!illegalKey;
	},

	isSortingRule(opt) {

		// Check for illegal keys
		const illegalKey = sortingRuleKeys.find(key => {
			const ele = opt[key];

			// If opt does not have the key, then ignored
			if (!ele) return;

			// If the ele is not a string and not an array, then the key is illegal
			if (typeof ele !== 'string' && !Array.isArray(ele)) return true;
		});

		return !illegalKey;
	},

	isReturnParam(opt) {
		return !opt.return || typeof opt.return === 'string';
	},

	isLib(opt) {
		return !opt.lib || typeof opt.lib === 'object';
	},

	isKdo(opt) {
		return !opt.kdo || typeof opt.kdo === 'object';
	},

	isSkipIfNot(opt) {
		return !opt.skipIfNot || typeof opt.skipIfNot === 'string';
	}
};

const fn = (opt) => {

	// If opt is a string or an array, means it's options.order
	if (typeof opt === 'string' || Array.isArray(opt)) return true;
	if (!opt || typeof opt !== 'object') return false;

	// If some illegal key exists, then it's not options
	if (check.hasIllegalKey(opt)) return false;

	// If none of the following occurs, opt is options.
	return !(
		!check.isSortingRule(opt) ||
		!check.isReturnParam(opt) ||
		!check.isLib(opt) ||
		!check.isKdo(opt) ||
		!check.isSkipIfNot(opt) ||
	0);
};

module.exports = fn;
