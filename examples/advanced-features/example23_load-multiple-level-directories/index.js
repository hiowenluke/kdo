
const kdo = require('../../../lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// ----------------------------------------------------
// Notice:

// 1. All of __lib directories in flow do not have index.js.
// 2. Some of sub-directories (such as flow12, flow2, flow3)
//    have no index.js, it means that kdo will executes all
//    functions in the directory in the default order.

// This makes the code structure clearer.
// ----------------------------------------------------

// Load flow like a normal node.js module,
// we don't care the details in flow.
const flow = require('./flow');

const fn = async () => {

	kdo.config({
		// isDisablePrint: true,
	});

	const args = config.init();
	const result = await flow(args);

	// In flow/f5.js, this.return = a1, means kdo will return the value of a1
	// Now we get the result, yes, its equal to args.a1.
	kdo.log('result:', result);

	// The value of a1 was set multiple times, and the last time is 8.
	// Now we regain the value of a1, it is 8, which means that
	// the execution order in flow is completely correct.
	kdo.log('a1 is', args.a1, '// <= correct');

	return args;
};

module.exports = fn;
