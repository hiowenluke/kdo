
const config = require('./config');
const tree = require('./tree');

const fn = (...args) => {
	const treeLevel = config.getTreeLevel();
	const prefix = treeLevel === 0 ? '' : '  │';
	args[0] = prefix + args[0];
	tree.printLog(...args);
};

module.exports = fn;
