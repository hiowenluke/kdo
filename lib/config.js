
const config = {
	default: {
		libDirName: '',
		isPrintTree: false,
		isAutoNext: true,

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
		return global.__kdoConfig ? global.__kdoConfig.isPrintTree : this.default.isPrintTree;
	},

	isAutoNext() {
		return global.__kdoConfig ? global.__kdoConfig.isAutoNext : this.default.isAutoNext;
	},

	changeLevel(val) {
		if (!this.isPrintTree()) return;
		global.__kdoConfig.tree.level += val;
	},

	getTree() {
		return global.__kdoConfig ? global.__kdoConfig.tree : {};
	},

	getLibDirName() {
		return global.__kdoConfig ? global.__kdoConfig.libDirName : this.default.libDirName;
	},
};

module.exports = config;
