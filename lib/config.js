
const config = {
	default: {
		isPrintTree: false,
		libDirName: null,

		tree: {
			level: 0,
			indent: 4
		}
	},

	init(myConfig) {
		if (typeof myConfig.isPrintTree === 'undefined') { // Not config
			return;
		}

		if (global.__kdoConfig) { // Is already configured
			global.__kdoConfig.tree.level = 0; // restore tree level
			return true;
		}

		// Apply customer config
		global.__kdoConfig = Object.assign({}, this.default, myConfig);
		return true;
	},

	isPrintTree() {
		const config = global.__kdoConfig;
		return config && config.isPrintTree;
	},

	changeLevel(val) {
		if (!this.isPrintTree()) return;
		global.__kdoConfig.tree.level += val;
	},

	getTree() {
		return global.__kdoConfig.tree;
	},

	getLibDirName() {
		return global.__kdoConfig.libDirName;
	},
};

module.exports = config;
