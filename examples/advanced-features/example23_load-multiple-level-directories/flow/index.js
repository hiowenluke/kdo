
// ----------------------------------------------------
// Note that all lib directories do not have index.js,
// and there is no redundant index.js in flow directory.
// This makes the code structure clearer.
// ----------------------------------------------------

const kdo = require('../../../../lib');

const order = [
	'flow1',
	'flow2',
	'flow3',
	'f4',
	'f5'
];

// Global config for kdo
kdo.config({

	// Print function name with indent for demo automatically
	// isPrintTree: true,

	// Specify the name of lib directory,
	// kdo will automatically load that directory to lib,
	// we don't have to load lib in each index.js in sub-directories.
	libDirName: '__lib',
});

module.exports = kdo.dir(module, order);
