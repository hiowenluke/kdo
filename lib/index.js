
const KDO = {
	init(args, lib) { // args = {a1, a2, a3}, lib = {f1, f2}
		this.args = args;
		this.chain = [];
		this.index = 0;

		// Attach the methods in lib to "this",
		// so that the "next" functions can use them via "this".
		if (lib) {
			const baseKeys = Object.keys(this);
			Object.keys(lib).forEach(key => {

				// Deny to override the default methods in KDO.
				if (baseKeys.indexOf(key) >= 0) return;
				this[key] = lib[key];
			});
		}
	},

	use(fn) {
		if (!fn) throw new Error('Requires a function or an object');

		// Load all methods in fn if its an object.
		if (typeof fn === 'object') {
			const obj = fn;

			Object.keys(obj).forEach(key => {
				const fn = obj[key];
				if (typeof fn !== 'function') return;

				this.use(fn);
			});
		}
		else {
			if (typeof fn !== 'function') throw new Error('Requires a function');
			this.chain.push(fn);
		}
	},

	async next(args) {
		if (this.index >= this.chain.length) {
			return;
		}

		if (args && typeof args !== 'object') throw new Error('Args must be an Object');

		// The parameters in args may be changed and passed by the previous function.
		// So update this.args with args to hold the changing.
		args && Object.assign(this.args, args);

		let fn = this.chain[this.index ++];
		if (!fn) return this.getResult();

		// Bind "this" to fn so that it can uses the methods in lib,
		// or set/get user-defined property of "this" in other functions in the chain.
		fn = fn.bind(this);

		// Bind "this" to this.next to make it to points to the correct object (the instance of KDO).
		return await fn(this.args, this.next.bind(this));
	},

	async do() {
		const result = await this.next();
		return this.getResult(result);
	},

	getResult(result) {

		// Give priority to the execution result of the current function (or last function);
		// Secondly use the result saved in this.return
		return 	typeof result !== 'undefined' ? result :
				typeof this.return !== 'undefined' ? this.return :
				undefined
		;
	}
};

const create = (...args) => {
	const kdo = Object.create(KDO);
	kdo.init(...args);
	return kdo;
};

module.exports = create;
