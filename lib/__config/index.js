
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
const config = {
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

const fn = (a1, a2) => {
	const isDisablePrint = typeof a1 === 'boolean' ? a1 : typeof a2 === 'boolean' ? a2 : null;
	const libDirName = typeof a1 === 'string' ? a1 : typeof a2 === 'string' ? a2 : null;

	if (isDisablePrint !== null || libDirName || null) {
		config.set({isDisablePrint, libDirName});
	}
};

const init = () => {
	Object.assign(fn, config);

	fn.init();

	// For sync version
	fn.forKdo = require('./forKdo');

	return fn;
};

module.exports = init();
