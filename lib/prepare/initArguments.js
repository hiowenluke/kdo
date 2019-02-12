
const requireDirectory = require('rir');
const tools = require('../tools');

const initArguments = {
	ifTheObjIsModuleThenRequireDirectory({obj}, next) {

		// If the obj is module, then require direcotry
		if (tools.isModule(obj)) {
			obj = requireDirectory(obj);
		}

		next({obj});
	},

	ifTheOptionsIsReturnParamThenSaveIt({options, returnParam}, next) {
		if (tools.isReturnParam(options)) {
			returnParam = options;
			options = null;
		}

		next({options, returnParam});
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

				// The options is lib if its NOT options
				if (!tools.isOptions(options)) {
					options = {lib: options};
				}
			}
		}

		next({options});
	}
};

module.exports = initArguments;
