
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

				// Check if some key was found
				const key = ['order', 'first', 'last', 'exclude', 'lib', 'return'].find(key => {
					if (typeof options[key] !== 'undefined') return true;
				});

				// The options is lib if its NOT any of above key
				if (!key) {
					options = {lib: options};
				}
			}
		}

		next({options});
	},

	ifTheOptionsIsReturnParamThenSetReturnParam({options, returnParam}, next) {
		if (typeof options === 'object') {
			if (options.return) {
				returnParam = options;
			}
		}

		next({returnParam});
	}
};

module.exports = initArguments;
