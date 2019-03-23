
const tree = require('../tree');
const autoNext = require('./autoNext');
const log = require('../log');
const topic = require('../topic');

const KDO = {
	__init(args, options) { // args: {a1, a2, a3}, options: {return: 'all', lib: {f1, f2}}

		// If there is only one argument, and it has lib, then it's options
		if (!options && args && typeof args.lib === 'object') {
			options = args;
			args = {};
		}

		args = args || {};
		options = options || {};

		this.args = args;
		this.__chain = [];
		this.__index = 0;

		// Save the return param if needed
		if (options.return) {
			this.returnParam = options.return;
		}

		// Attach the methods in lib to "this",
		// so that the "next" functions can use them via "this".
		if (options.lib) {
			const lib = options.lib;
			const baseKeys = Object.keys(this);
			Object.keys(lib).forEach(key => {

				if (baseKeys.indexOf(key) >= 0) {
					console.log(`[KDO warning] Deny to override the default method "${key}" in KDO.`);
					return;
				}

				this[key] = lib[key];
			});
		}
	},

	use(fn, myName) {
		if (!fn) throw new Error('Requires a function or an object');

		// Load all methods in fn if its an object.
		if (typeof fn === 'object') {
			const obj = fn;

			Object.keys(obj).forEach(key => {
				const fn = obj[key];
				if (typeof fn !== 'function') return;

				// If the parent has no myName, then the key in child will be ignored.
				this.use(fn, myName && key);
			});
		}
		else {
			if (typeof fn !== 'function') throw new Error('Requires a function');

			// Use fn.filename (by rir) or fn.name as default myName
			fn.myName = myName || fn.filename || fn.name;

			// If fn.length is not 2, means it's lost the next function,
			// then generate a kdo function to replace it
			this.__chain.push(fn.length === 2 ? fn : autoNext(fn));
		}
	},

	async __next(args) {
		if (args && typeof args !== 'object') throw new Error('Args must be an Object');

		// The parameters in args may be changed and passed by the previous function.
		// So update this.args with args to hold the changing.
		args && this.setArgs(args);

		if (this.__index >= this.__chain.length) {
			return this.__getResult();
		}

		let fn = this.__chain[this.__index++];
		if (!fn) {
			return this.__getResult();
		}

		const fnName = fn.myName;
		tree.printFnName(fnName);

		// Save the current function name as this.fnName
		this.fnName = fnName;

		// Bind "this" to fn so that it can uses the methods in this.lib,
		// or set/get user-defined property of this.lib in other functions in the chain.
		fn = fn.bind(this);
		fn.myName = fnName;

		// Bind "this" to this.__next to make it to points to the correct object (the instance of KDO).
		return await fn(this.args, this.__next.bind(this));
	},

	async do() {
		tree.level(+1);
		const result = await this.__next();
		tree.level(-1);

		tree.printDone();
		return this.__getResult(result);
	},

	setArgs(args) {
		if (!args || typeof args !== 'object') return;
		Object.assign(this.args, args);
	},

	__getResult(result) {

		// 1. Try to use the result of the current function (or last function);
		// 2. Try to use the result saved in this.return;
		// 3. If this.returnParam is 'all', then return this.args;
		// 4. If this.returnParam is not 'undefined', then return this.args[this.returnParam];
		return typeof result !== 'undefined' ? result :
			typeof this.return !== 'undefined' ? this.return :
				this.returnParam === 'all' ? this.args :
					typeof this.returnParam !== 'undefined' ? this.args[this.returnParam] :
						undefined
			;
	}
};

KDO.log = log;
KDO.topic = topic;

module.exports = KDO;
