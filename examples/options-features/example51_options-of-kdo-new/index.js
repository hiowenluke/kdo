
const kdo = require('../../../lib');
const lib = require('../../../examples/__lib');
const config = require('../../../examples/__config');

// Load all files in folder "flow" and save to flow
const flow = require('rir')(module, './flow');

const fn = async () => {

	kdo.config({isPrintTree: true});

	const args = config.init();

	// Only two options "return" and "lib" for kdo.new
	const options = {

		// See example08 and example09 in basic-features
		return: '',

		// See example21 in advanced-features
		lib
	};

	const k = kdo.new(args, options);

	// Load these functions one by one
	// Other functions that are not specified here will not be loaded
	k.use(flow.f1);
	k.use(flow.f7);
	k.use(flow.f4);
	k.use(flow.f2);
	k.use(flow.f3);

	// Execute all loaded functions
	const result = await k.do();

	return result;
};

module.exports = fn;
