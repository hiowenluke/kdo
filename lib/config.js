
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

	setItem(name, val) {
		this[name] = val;
	},

	getItem(name) {
		return this[name];
	},

	setIsPrintTree(val) {
		this.setItem('isPrintTree', val);
	},

	getIsPrintTree() {
		return this.getItem('isPrintTree');
	},

	setIsPrintLog(val) {
		this.setItem('isPrintLog', val);
	},

	getIsPrintLog() {
		return this.getItem('isPrintLog');
	},

	setIsDisablePrint(val) {
		this.setItem('isDisablePrint', val);
	},

	getIsDisablePrint() {
		return this.getItem('isDisablePrint');
	},

	changeLevel(val) {
		if (!this.getIsPrintTree()) return;
		this.getItem('tree').level += val;
	},

	getTree() {
		return this.getItem('tree');
	},

	setLibDirName(val) {
		this.setItem('libDirName', val);
	},

	getLibDirName() {
		return this.getItem('libDirName');
	}
};

me.init();
module.exports = me;
