
const requireDirectory = require('rir');

const createSimulatedModule = (filename) => {
	filename = fixFilename(filename);
	return {filename, isSimulatedModule: true};
};

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

const fn = (...args) => {
	const caller = args.pop();
	const obj = args[0];
	let isOK;

	// kdo(...)
	if (obj) {
		if (typeof obj === 'object') {

			// kdo(module)
			if (obj.constructor.name === 'Module') {
				isOK = true;
			}
			else {

				// kdo({filename: "..."})
				if (typeof obj.filename === 'string') {
					isOK = true;
					args[0] = createSimulatedModule(obj.filename);
				}
			}
		}
		else {

			// kdo("...")
			if (typeof obj === 'string') {
				isOK = true;

				// kdo("./relate/to/...") => kdo(module, "./relate/to/...")
				// The obj is a relative path, then simulate module object
				if (obj.substr(0, 1) === '.') {
					const obj = createSimulatedModule(caller);
					args.unshift(obj);
				}
				else {
					// kdo("/path/to/...")
					// The obj is an absolute path, use it directly
					args[0] = createSimulatedModule(obj);
				}
			}
		}
	}

	// kdo()
	else {
		isOK = true;
		args[0] = createSimulatedModule(caller);
	}

	if (!isOK) {
		throw new Error('The first argument must be a node.js module, or {filename: "..."}, or path string.\n')
	}

	return requireDirectory(...args);
};

module.exports = fn;
