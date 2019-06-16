
const def = {
	libDirName: '',
	isDisablePrint: false,
	isPrintTree: true,
	isPrintLog: true,

	tree: {
		level: 0,
		indent: 4
	}
};

// User customize data
const me = {
	init() {

		// Initialize the config only once
		if (global.__kdo_config) return;
		global.__kdo_config = {};

		// Apply the default values
		this.set(def);
	},

	set(cfg) {
		if (typeof cfg !== 'object') return;
		Object.assign(global.__kdo_config, cfg);
	},

	get() {
		return global.__kdo_config;
	},

	__setItem(key, val) {
		global.__kdo_config[key] = val;
	},

	__getItem(key) {
		return global.__kdo_config[key];
	},

	setIsPrintTree(val) {
		this.__setItem('isPrintTree', val);
	},

	getIsPrintTree() {
		return this.__getItem('isPrintTree');
	},

	setIsPrintLog(val) {
		this.__setItem('isPrintLog', val);
	},

	getIsPrintLog() {
		return this.__getItem('isPrintLog');
	},

	setIsDisablePrint(val) {
		this.__setItem('isDisablePrint', val);
	},

	getIsDisablePrint() {
		return this.__getItem('isDisablePrint');
	},

	changeLevel(val) {
		if (!this.getIsPrintTree()) return;
		this.__getItem('tree').level += val;
	},

	getTree() {
		return this.__getItem('tree');
	},

	setLibDirName(val) {
		this.__setItem('libDirName', val);
	},

	getLibDirName() {
		return this.__getItem('libDirName');
	}
};

me.init();

// For sync version
me.forKdo = require('./forKdo');

module.exports = me;
