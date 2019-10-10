
const fixFilename = (filename) => {

	// kdo("/path/to/some/xxx.js")
	if (/\.js$/.test(filename)) {

		// Do nothing

		// All files (exclude the xxx.js file) in the directory
		// which the xxx.js file is located will be required.
	}

	else

	// kdo("/path/to/directory/.")
	if (/\.$/.test(filename)) {
		// do nothing
	}

	else

	// kdo("/path/to/directory/")
	if (/\/$/.test(filename)) {
		filename += '.'
	}

	else {
		// kdo("/path/to/directory")
		filename += '/.'
	}

	return filename;
};

/** @name lib.createSimulatedModule */
const fn = (filename) => {
	filename = fixFilename(filename);
	return {filename, isSimulatedModule: true};
};

module.exports = fn;
