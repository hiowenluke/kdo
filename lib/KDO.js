
const tree = require('./tree');
const config = require('./config');

const KDO = {
	init(args, options = {}) { // args: {a1, a2, a3}, options: {return: 'all', lib: {f1, f2}}
		this.args = args;
		this.chain = [];
		this.index = 0;

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
			if (myName) fn.myName = myName;

			let kdoFn = fn;

			// If it's auto next, then generate a kdo function
			if (config.isAutoNext()) {
				kdoFn = async (args, next) => {
					const result = await fn(args);
					if (!result) await next();
					return result;
				};
			}

			this.chain.push(kdoFn);
		}
	},

	async next(args) {
		if (args && typeof args !== 'object') throw new Error('Args must be an Object');

		// The parameters in args may be changed and passed by the previous function.
		// So update this.args with args to hold the changing.
		args && Object.assign(this.args, args);

		if (this.index >= this.chain.length) {
			return this.__getKdoResult();
		}

		let fn = this.chain[this.index ++];
		if (!fn) {
			return this.__getKdoResult();
		}

		tree.print(fn);

		// Bind "this" to fn so that it can uses the methods in this.lib,
		// or set/get user-defined property of this.lib in other functions in the chain.
		fn = fn.bind(this);

		// Bind "this" to this.next to make it to points to the correct object (the instance of KDO).
		return await fn(this.args, this.next.bind(this));
	},

	async do() {
		const result = await this.next();
		tree.print({myName: 'Done'});

		return this.__getKdoResult(result);
	},

	__getKdoResult(result) {

		// 1. Try to use the result of the current function (or last function);
		// 2. Try to use the result saved in this.return;
		// 3. If this.returnParam is 'all', then return this.args;
		// 4. If this.returnParam is not 'undefined', then return this.args[this.returnParam];
		return typeof result !== 'undefined' ? result :
			typeof this.return !== 'undefined' ? this.return :
				this.returnParam === 'all' ? this.args :
					typeof this.returnParam !== 'undefined' ? this.args[this.returnParam]:
						undefined
			;
	}
};

module.exports = KDO;
