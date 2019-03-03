
const requireDirectory = require('rir');
const config = require('./config');

const fn = (kdo, obj) => {

	// If the obj is a Node.js module, then require the whole directory
	if (obj.constructor.name === 'Module') {

		// Save module.filename
		const __moduleFilename = obj.filename;

		// If the sub-directory has no index.js, then specify a virtual index function,
		// in this case, it's kdo.dir. This will be equivalent to the following:
		//		module.exports = require('kdo').dir(module);
		const virtualIndexFn = kdo.dir;

		// Exclude the name of lib directory
		const exclude = config.getLibDirName();

		obj = requireDirectory(obj, {virtualIndexFn, exclude});
		obj.__moduleFilename = __moduleFilename;
	}

	return obj;
};

module.exports = fn;
