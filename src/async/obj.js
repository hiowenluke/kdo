
const requireDirectory = require('rir');
const lib = require('../__lib');

const fn = (...args) => {
	const caller = args.pop();
	const arg0 = args[0];
	let isOK;

	// kdo(...)
	if (arg0) {
		if (typeof arg0 === 'object') {

			// kdo(module)
			if (arg0.constructor.name === 'Module') {
				isOK = true;
			}
			else {

				// kdo({filename: "..."})
				if (typeof arg0.filename === 'string') {
					isOK = true;
					args[0] = lib.createSimulatedModule(arg0.filename);
				}

				else {
					isOK = true;

					// kdo({exclude: "xxx"}) => kdo(module, {exclude: "xxx"})
					// The obj is an options, insert the simulatedCallerModule.
					args.unshift(lib.createSimulatedModule(caller));
				}
			}
		}
		else {

			// kdo("...")
			if (typeof arg0 === 'string') {

				// kdo("./relate/to/...") => kdo(module, "./relate/to/...")
				// The obj is a relative path, insert the simulatedCallerModule.
				if (arg0.substr(0, 1) === '.') {
					isOK = true;
					args.unshift(lib.createSimulatedModule(caller));
				}
				else {
					isOK = true;

					// kdo("/path/to/...")
					// The obj is an absolute path, use it directly
					args[0] = lib.createSimulatedModule(arg0);
				}
			}
		}
	}

	// kdo()
	else {
		isOK = true;
		args[0] = lib.createSimulatedModule(caller);
	}

	if (!isOK) {
		throw new Error('The first argument must be a node.js module, or {filename: "..."}, or path string.\n')
	}

	return requireDirectory(...args);
};

module.exports = fn;
