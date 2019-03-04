
const config = {
	default: {
		isPrintTree: false,
		libDirName: null,

		tree: {
			level: 0,
			indent: 4
		}
	},

	init(cfg) {
		if (global.__kdoConfig) { // Is already configured
			global.__kdoConfig.tree.level = 0; // restore tree level
			return true;
		}

		// Apply customer config
		global.__kdoConfig = Object.assign({}, this.default, cfg);
		return true;
	},

	isPrintTree() {
		// the default value of isAutoNext is FALSE if there is no config
		return global.__kdoConfig && global.__kdoConfig.isPrintTree;
	},

	isAutoNext() {
		// the default value of isAutoNext is TRUE if there is no config
		return global.__kdoConfig && global.__kdoConfig.isAutoNext || !global.__kdoConfig;
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
