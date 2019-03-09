
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

	getItem(name) {
		const data = global.__kdoConfig;
		return data ? data[name] : this.default[name];
	},

	getIsPrintTree() {
		return this.getItem('isPrintTree');
	},

	getIsDisableLog() {
		// In test, it will be set to true to disable printing logs.
		return global.__kdo_isDisableLog;
	},

	changeLevel(val) {
		if (!this.getIsPrintTree()) return;
		global.__kdoConfig.tree.level += val;
	},

	getTree() {
		return this.getItem('tree');
	},

	getTreeLevel() {
		return this.getTree().level;
	},

	getLibDirName() {
		return this.getItem('libDirName');
	}
};

module.exports = me;
