
const config = require('./config');
const configKdo = require('./configKdo');
const prefix = '[KDO]';

const tree = {
	level(val) {
		config.changeLevel(val);
	},

	print(fn) {
		if (!fn.myName) return;
		if (!config.getIsPrintTree()) return;

		let {level, indent} = config.getTree();

		// If in kdo.use(), the level will be 0
		if (level === 0) level = 1;

		console.log(prefix + ' '.repeat((level - 1) * indent), fn.myName);
	},

	printDone() {
		if (configKdo.getIsForKdo()) return;
		if (!config.getIsPrintTree()) return;

		const {level} = config.getTree();
		if (level > 1) return;

		console.log(prefix, 'done');
	}
};

module.exports = tree;
