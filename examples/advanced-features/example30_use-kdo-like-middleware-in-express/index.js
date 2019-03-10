
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// ----------------------------------------------------
// Furthermore, we can save each function as a separate file
// and use a multi-level directory structure to represent the code structure,
// which will make the code structure clearer, easier to understand and maintain.
// ----------------------------------------------------

// Load all files in folder "flow" and save to flow
const flow = kdo.require(module, './flow');

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// For options, see example51 in options-features
	const k = kdo.new(args, {lib});

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(flow.f1);
	k.use(flow.f4);
	k.use(flow.f2);
	k.use(flow.f3);

	// Or load all functions in flow if we do not need to specify the order one by one.
	// Uncomment the code below (and comment the code k.use() above) to see the effect:
	// k.use(flow);

	// Execute all loaded functions
	const result = await k.do();
	return result;

	// ----------------------------------------------------
	// See the files below to see the actual application of kdo.new:
	// 		/kdo/lib/options/initAll.js
	// 		/kdo/lib/options/initSortingRules.js
	// ----------------------------------------------------
};

module.exports = fn;
