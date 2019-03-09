
const config = require('./config');
const forModule = require('./forModule');
const options = require('./options');
const execute = require('./execute');
const tree = require('./tree');
const dir = require('./dir');
const new_ = require('./new');
const verify = require('./verify');
const log = require('./log');

const kdo = async (obj, args, opt) => {

	// try { // for debugging only

	let result;
	tree.level(+1);

	// If the obj is a Node.js module, then require the whole directory
	obj = forModule(kdo, obj);

	// Verify args and options
	({args, opt} = verify(args, opt));

	// Init config if needed, for the case:
	// const options = {
	//		kdo: {
	//			isPrintTree: true
	// 		}
	// }
	opt.kdo && config.set(opt.kdo);

	// Init options
	opt = await options.init(kdo, obj, opt);

	// Execute all methods in obj by assigned order
	result = await execute(kdo, obj, args, opt);

	tree.level(-1);
	return result;

	// } catch (e) { console.log(e) }
};

kdo.config = (cfg) => {
	config.set(cfg);
};

kdo.dir = (module, opt) => {
	return dir(kdo, module, opt);
};

kdo.new = (...args) => {
	return new_(...args);
};

kdo.log = (...args) => {
	return log(...args);
};

module.exports = kdo;
