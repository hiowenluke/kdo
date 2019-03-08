
// ----------------------------------------------------
// Notice:

// 1. All __lib directories in flow do not have index.js.
// 2. Some sub-directories (such as flow12, flow2, flow3)
//    have no index.js, it means that kdo will executes all
//    functions in the directory in the default order.

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

// global.__kdo_isDisableLog = true;

// Global config for kdo
kdo.config({

	// Print function name with indent for demo automatically
	isPrintTree: true,

	// Specify the name of lib directory,
	// kdo will automatically load that directory to lib,
	// we don't have to load lib in each index.js in sub-directories.
	libDirName: '__lib',
});

module.exports = kdo.dir(module, order);
