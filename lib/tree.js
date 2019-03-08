
const config = require('./config');
const configKdo = require('./configKdo');
const prefix = '[KDO]';

const tree = {
	level(val) {
		config.changeLevel(val);
	},

	printFnName(fnName) {
		if (!fnName) return;
		if (configKdo.getIsForKdo()) return;
		if (!config.getIsPrintTree()) return;

		this.printLog(fnName);
	},

	printLog(...args) {
		if (config.getIsDisableLog()) return;
		let {level, indent} = config.getTree();

		// In kdo.use(), the level will be 0
		if (level === 0) level = 1;

		const indentStr = prefix + ' '.repeat((level - 1) * indent);
		console.log(indentStr, ...args);
	},

	printDone() {
		if (configKdo.getIsForKdo()) return;
		if (!config.getIsPrintTree()) return;
		this.printLog('done');
	}
};

module.exports = tree;
