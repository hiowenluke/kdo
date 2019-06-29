
const config = require('../../__config');
const fs = require('fs');
const path = require('path');
const requireDirectory = require('rir');

const kdo = {
	flow: require('../flow')
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
		// 		module.exports = kdo.flow(module, {lib});
		const virtualIndexFn = (files, filePath) => {

			// if (filePath.indexOf('flow12') >= 0) debugger;

			const options = {};
			const libPath = path.resolve(filePath, './' + libDirName);

			// Load the lib directory separately
			if (fs.existsSync(libPath)) {

				// Attach "/." to specify a directory
				options.lib = requireDirectory({filename: filePath + '/.'}, libDirName);
			}

			return kdo.flow(files, options);
		};

		// Load the entire directory with excluding the lib directory
		obj = requireDirectory(obj, {virtualIndexFn, exclude: libDirName, isAttachFileName: true});
		obj.__moduleFilename = __moduleFilename;

		// Known issue:
		// 		File names are sorted according to unicode encoding. When multiple file names
		// 		contain uppercase and lowercase letters, the sort results are not as expected.

		// For example:

		// The file names order in directory like blow:
		//		a.js
		//		B.js
		//		c.js
		//
		// The file names order in obj like below:
		//		obj.B
		//		obj.a
		//		obj.c
	}

	return obj;
};

module.exports = fn;
