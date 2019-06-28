
const kdo = require('my-kdo');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

const flow = {
	async f1({a1, a2, a3}) {

		// The this.fnName is name of the current function,
		// for example, it's "f1" in this case
		this.log(this.fnName, 'do something');

		// The this.log is a built-in function of kdo.
		// It prints logs with indent, and same usage as console.log().
		this.log(a1, a2, a3);

		// The kdo will automatically go to the next function, cool!
	},

	async f2({a1, a2, a3}) {

		// If the condition is not met, then return
		// The kdo will automatically go to the next function, cool!
		if (1) return;

		// The subsequent code will be ignored.
		this.log(this.fnName, 'do something');
		this.log(a1, a2, a3);
	},

	async f3({a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a2, a3);
	},

	async f4({a2, a3}) {
		if (1) return;

		this.log(this.fnName, 'do something');
		this.log(a2, a3);
	},

	async f5(args) {

		// The this.topic is a built-in function of kdo.
		this.topic('nest call kdo with flow5a');

		const flow5a = {
			async f5a1() {
				this.log(this.fnName, 'do something');
			},

			async f5a2() {
				this.log(this.fnName, 'do something');
			},

			async f5a3() {
				this.log(this.fnName, 'do something');
			}
		};

		// Nest call kdo
		await kdo.do(flow5a, args);

		this.topic('nest call kdo with flow5b');
		const flow5b = {
			async f5b1() {
				this.log(this.fnName, 'do something');
			},

			async f5b2() {
				this.log(this.fnName, 'do something');
			},

			async f5b3() {
				this.log(this.fnName, 'do something');
			}
		};

		await kdo.do(flow5b, args);
	},

	async f6() {
		this.log(this.fnName, 'do something');
	},

	async f7() {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// Execute all functions in flow in the original order and
	// pass arguments to all functions via args
	const result = await kdo.do(flow, args);

	// Use kdo.log instead of this.log if it is out of the flow,
	// 'cause the "this" is not point to kdo anymore.
	kdo.log('args =', args);

	return result;
};

module.exports = fn;
