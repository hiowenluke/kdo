
const require_ = require('../require');
const config = require('../config');
const fs = require('fs');
const path = require('path');

const kdo = {
	dir: require('../dir')
};

const fn = (obj) => {

	// If the obj is a Node.js module, then require the whole directory
	if (obj.constructor.name === 'Module') {

		// Save module.filename
		const __moduleFilename = obj.filename;
		const libDirName = config.getLibDirName();

		// If the sub-directory has no index.js, then specify a virtual index function
		// to simulate a index.js file like the following:
		// 		const kdo = require('kdo');
		// 		const lib = kdo.require(module, '__lib');
		// 		module.exports = kdo.dir(module, {lib});
		const virtualIndexFn = (files, filePath) => {

			// if (filePath.indexOf('flow12') >= 0) debugger;

			const options = {};
			const libPath = path.resolve(filePath, './' + libDirName);

			// Load the lib directory separately
			if (fs.existsSync(libPath)) {

				// Attach "/." to specify a directory
				options.lib = require_({filename: filePath + '/.'}, libDirName);
			}

			return kdo.dir(files, options);
		};

		// Exclude the name of lib directory
		obj = require_(obj, {virtualIndexFn, exclude: libDirName});
		obj.__moduleFilename = __moduleFilename;
	}

	return obj;
};

module.exports = fn;