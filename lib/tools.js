
const tools = {
	isModule(obj) {
		if (!obj || typeof obj !== 'object') return false;

		return 	Array.isArray(obj.paths) &&
				obj.paths[obj.paths.length - 1] === '/node_modules';
	},

	isOptions(obj) {
		if (!obj) return false;

		if (typeof obj === 'string') return true; // one line or multi-lines, eg: `f1\nf2\nf3`
		if (Array.isArray(obj)) return true; // [f1, f2, f3]

		if (typeof obj !== 'object') return false;

		// Check if some key was found
		const key = ['order', 'first', 'last', 'exclude', 'lib'].find(key => {
			if (typeof obj[key] !== 'undefined') return true;
		});

		return !!key;
	},

	isReturnParam(obj) {
		if (!obj || typeof obj !== 'object') return false;

		const keys = Object.keys(obj);
		return keys.length === 1 && keys[0] === 'return';
	}
};

module.exports = tools;
