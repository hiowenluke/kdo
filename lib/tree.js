
const config = require('./config');
const prefix = '[KDO]';

const tree = {
	level(val) {
		config.changeLevel(val);
	},

	print(fn) {
		if (!fn.myName) return;
		if (!config.getIsPrintTree()) return;

		const {level, indent} = config.getTree();
		console.log(prefix + ' '.repeat((level - 1) * indent), fn.myName);
	},

	printDone() {
		if (config.isForKdo) return;
		if (!config.getIsPrintTree()) return;

		const {level} = config.getTree();
		if (level > 1) return;

		console.log(prefix, 'Done');
	}
};

module.exports = tree;
