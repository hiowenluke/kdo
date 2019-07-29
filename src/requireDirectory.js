
const path = require('path');
const requireDirectory = require('rir');
const simulatedModule = require('./simulatedModule');

// Require the directory where the specified file is located to be an object
const fn = (...args) => {

	// The last argument is caller of kdo.obj()
	const caller = args.pop();

	// The first argument must be one of the following:
	//		1. Node.js module object
	//		2. {filename}
	//		3. undefined. The module parameter is omitted, so kdo will simulate it
	//		4. A string. The module parameter is omitted, so kdo will simulate it, and the string will be relative path of it.
	const obj = args[0];

	// 1. Node.js module object //  kdo(module)
	if (typeof obj === 'object' && obj.constructor.name === 'module') {
		// do nothing
	}

	else

	// 2. {filename}
	// 		kdo({filename: "/path/to/directory/file.js"}) =>
	// 		kdo({filename: "/path/to/directory/."})
	if (typeof obj === 'object' && typeof obj.filename === 'string') {
		const filename = obj.filename;

		// kdo({filename: "/path/to/directory/."})
		if (/\/\.$/.test(filename)) {
			// do nothing
		}

		else

		// kdo({filename: "/path/to/directory/"})
		if (/\/$/.test(filename)) {
			obj.filename += '.';
		}

		else

		// kdo({filename: "/path/to/directory"})
		if (!/\.js$/.test(filename)) {
			obj.filename += '/.';
		}

		else {
			// kdo({filename: "/path/to/directory/file.js"})

			// "/path/to/directory"
			const parentPath = path.resolve(filename, '../');

			// "/path/to/directory/."
			obj.filename = parentPath + '/.';
		}
	}

	else

	// 3. The module parameter is omitted // kdo()
	if (obj === undefined) {
		simulatedModule.addToArgs(args, caller);
	}

	else

	// 4. A string relative to the module path // kdo("./tools")
	if (typeof obj === 'string') {
		simulatedModule.addToArgs(args, caller);
	}

	return requireDirectory(...args);
};

module.exports = fn;
