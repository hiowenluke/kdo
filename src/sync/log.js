
const config = require('../__config');
const tree = require('./tree');

const fn = (...args) => {
	const treeLevel = config.getTree().level;
	const prefix = treeLevel === 0 ? '' : '  │';
	args[0] = prefix + args[0];
	tree.printLog(...args);
};

module.exports = fn;
