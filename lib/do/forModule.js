
const config = require('../config');
const fs = require('fs');
const path = require('path');
const requireDirectory = require('rir');

const kdo = {
	dir: require('../dir')
};

const fn = (obj) => {

	// If the obj is a Node.js module, then load the entire directory
	if (obj.constructor.name === 'Module') {

		// Save module.filename
		const __moduleFilename = obj.filename;
		const libDirName = config.getLibDirName();

		// If the sub-directory has no index.js, then specify a virtual index function
		// to simulate a index.js file like the following:
		// 		const kdo = require('kdo');
		// 		const lib = require('rir')(module, '__lib');
		// 		module.exports = kdo.dir(module, {lib});
		const virtualIndexFn = (files, filePath) => {

			// if (filePath.indexOf('flow12') >= 0) debugger;

			const options = {};
			const libPath = path.resolve(filePath, './' + libDirName);

			// Load the lib directory separately
			if (fs.existsSync(libPath)) {

				// Attach "/." to specify a directory
				options.lib = requireDirectory({filename: filePath + '/.'}, libDirName);
			}

			return kdo.dir(files, options);
		};

		// Load the entire directory with excluding the lib directory
		obj = requireDirectory(obj, {virtualIndexFn, exclude: libDirName});
		obj.__moduleFilename = __moduleFilename;
	}

	return obj;
};

module.exports = fn;
