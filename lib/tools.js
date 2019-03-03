
const tools = {
	isSortingRule(obj) {
		if (!obj) return false;

		if (typeof obj === 'string') return true; // multi-lines, eg: `f1\nf2\nf3`
		if (Array.isArray(obj)) return true; // [f1, f2, f3]

		if (typeof obj !== 'object') return false;

		// Check if some key was found
		const key = ['order', 'first', 'last', 'exclude'].find(key => {
			if (typeof obj[key] !== 'undefined') return true;
		});

		return !!key;
	},

	isReturnParam(obj) {
		if (!obj || typeof obj !== 'object') return false;

		const keys = Object.keys(obj);
		return keys.length === 1 && keys[0] === 'return';
	},

	isLib(obj) {
		if (!obj || typeof obj !== 'object') return false;

		return !this.isSortingRule(obj) && !this.isReturnParam(obj);
	}
};

module.exports = tools;
