
// User customize config
const me = {
	default: {
		libDirName: '',
		isPrintTree: false,

		tree: {
			level: 0,
			indent: 4
		}
	},

	init(cfg) {
		if (typeof cfg !== 'object') return;

		if (global.__kdoConfig) { // Is already configured
			global.__kdoConfig.tree.level = 0; // restore tree level
			return true;
		}

		// Apply customer config
		global.__kdoConfig = Object.assign({}, this.default, cfg);
		return true;
	},

	getIsPrintTree() {
		return global.__kdoConfig ? global.__kdoConfig.isPrintTree : this.default.isPrintTree;
	},

	changeLevel(val) {
		if (!this.getIsPrintTree()) return;
		global.__kdoConfig.tree.level += val;
	},

	getTree() {
		return global.__kdoConfig ? global.__kdoConfig.tree : {};
	},

	getTreeLevel() {
		return global.__kdoConfig ? global.__kdoConfig.tree.level : null;
	},

	getLibDirName() {
		return global.__kdoConfig ? global.__kdoConfig.libDirName : this.default.libDirName;
	}
};

module.exports = me;
