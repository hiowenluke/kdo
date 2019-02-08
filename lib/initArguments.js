
const requireDirectory = require('rir');

const initArguments = {
	ifTheObjIsModuleThenRequireDirectory({obj}, next) {

		// If the obj is module, then require direcotry
		if (Array.isArray(obj.paths) && obj.paths[obj.paths.length - 1] === '/node_modules') {
			obj = requireDirectory(obj);
		}

		next({obj});
	},

	ifTheOptionsIsAStringThenConvertItToAnArray({options}, next) {

		// If the options is a string, then it will be like this:
		// `
		//		f1 // comment
		//		f2 // /* comment */
		// `
		if (typeof options === 'string') {
			if (!/[\r\n]/.test(options)) {
				throw new Error('The options must be an object or an array or multilines with ``.')
			}

			let str = options
				.replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, '') // strip comments
				.replace(/\s+/mg, ' ') // remove redundant spaces
				.replace(/,/g, '') // remove commas
				.replace(/(^\s)|(\s$)/g, '') // remove leading and trailing spaces
			;

			options = str.split(' ');
		}

		next({options});
	},

	ifTheOptionsIsOrderOrLibThenUpdateTheOptions({options}, next) {

		// The options is order
		if (Array.isArray(options)) {
			options = {order: options};
		}
		else {
			if (typeof options === 'object') {

				// The options is lib if it has no 'order', 'first', 'last', 'exclude', 'lib' properties
				if (!options.order && !options.first && !options.last && !options.exclude && !options.lib) {
					options = {lib: options};
				}
			}
		}

		next({options});
	}
};

module.exports = initArguments;
