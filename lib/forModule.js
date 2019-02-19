
const requireDirectory = require('rir');
const tools = require('./tools');

const fn = (obj, kdo) => {

	// If the obj is a Node.js module, then require the whole directory
	if (tools.isModule(obj)) {

		// If the sub-directory has no index.js, then specify a virtual index function,
		// in this case, it's kdo.dir. This will be equivalent to the following:
		//		module.exports = require('kdo').dir(module);
		obj = requireDirectory(obj, {virtualIndexFn: kdo.dir});
	}

	return obj;
};

module.exports = fn;
