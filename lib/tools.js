
const tools = {
	isSortingRule(obj) {
		if (!obj || typeof obj !== 'object') return false;

		// Check if some key was found
		const key = ['order', 'first', 'last', 'exclude'].find(key => {
			if (typeof obj[key] !== 'undefined') return true;
		});

		return !!key;
	},

	isReturnParam(obj) {
		if (!obj || typeof obj !== 'object') return false;

		return !!obj.return;
	},

	isLib(obj) {
		if (!obj || typeof obj !== 'object') return false;

		return !!obj.lib;
	},

	isOptions(obj) {
		return this.isSortingRule(obj) || this.isReturnParam(obj) || this.isLib(obj);
	}
};

module.exports = tools;
