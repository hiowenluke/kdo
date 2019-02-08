
const config = require('./config');

const tree = {
	level(val) {
		config.changeLevel(val);
	},

	print(fn) {
		if (!fn.myName) return;
		if (!config.isPrintTree()) return;

		const {level, indent} = config.getTree();
		console.log('[KDO]' + ' '.repeat((level - 1) * indent), fn.myName);
	}
};

module.exports = tree;
