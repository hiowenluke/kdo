
const config = require('../../__config');
const options = require('../options');

const forModule = require('./forModule');
const execute = require('./execute');
const verify = require('./verify');
const isSkip = require('./isSkip');

const fn = async (obj, args, opt) => {

	try {

		let result;

		// Verify args and options
		({args, opt} = verify(args, opt));

		// If the condition is not met, then return undefined to skip this branch flow,
		// and let kdo continue to execute the next function.
		if (isSkip(args, opt)) return;

		// If the obj is a Node.js module, then require the entire directory
		obj = forModule(obj);

		// Init config if needed, for the case:
		// const options = {
		//		kdo: {
		//			isPrintTree: true
		// 		}
		// }
		opt.kdo && config.set(opt.kdo);

		// Init options
		opt = await options.init(obj, opt);

		// Execute all methods in obj by assigned order
		result = await execute(obj, args, opt);

		return result;

	} catch (e) { console.log(e) }
};

module.exports = fn;
