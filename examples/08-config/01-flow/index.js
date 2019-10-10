
// ----------------------------------------------------
// Notice:

// 1. All of __lib directories in flow do not have index.js.
// 2. Some of sub-directories (such as flow12, flow2, flow3)
//    have no index.js, it means that kdo will executes all
//    functions in the directory in the default order.

// This makes the code structure clearer.
// ----------------------------------------------------

const kdo = require('../../../src');

// Global config for kdo
kdo.config.set({

	// Specify the lib directory name,
	// kdo will automatically load that directory to lib,
	// we don't have to load lib in each js file in sub-directories.
	libDirName: '__lib',
});

// This equal to the below:
// kdo.config.setLibDirName('__lib');

const order = [
	'flow1',
	'flow2',
	'flow3',
	'f4',
	'f5'
];

module.exports = kdo.flow(order);
