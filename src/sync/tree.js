
const config = require('../__config');
const configKdo = require('../__config').forKdo;
const prefix = '[KDO]';

const tree = {
	level(val) {
		config.changeLevel(val);
	},

	print(...args) {
		if (configKdo.getIsForKdo()) return;
		if (config.getIsDisablePrint()) return;

		let {level, indent} = config.getTree();

		// In kdo.use(), the level will be 0
		if (level === 0) level = 1;

		const indentStr = prefix + ' '.repeat((level - 1) * indent);
		console.log(indentStr, ...args);
	},

	printFnName(fnName) {
		if (!fnName) return;
		if (!config.getIsPrintTree()) return;

		this.print(fnName);
	},

	printDone() {
		if (!config.getIsPrintTree()) return;

		// Print only after the process has finished (level === 0)
		const level = config.getTree().level;
		if (level !== 0) return;

		this.print('done');
	},

	printLog(...args) {
		if (!config.getIsPrintLog()) return;
		this.print(...args);
	}
};

module.exports = tree;
