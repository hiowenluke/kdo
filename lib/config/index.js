
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
		this.set(def);
	},

	set(cfg) {
		if (typeof cfg !== 'object') return;
		Object.assign(this, cfg);
	},

	get() {
		const data = {};
		Object.keys(def).forEach(key => data[key] = def[key]);
		return data;
	},

	__setItem(name, val) {
		this[name] = val;
	},

	__getItem(name) {
		return this[name];
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
module.exports = me;
