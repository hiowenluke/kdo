
const kdo = require('../../src');

let x = 0;
const expect = 10;

const flow = {
	async f1({a1, a2, a3}) {
		this.log(this.fnName, 'do something');
		x = a1 + a2 + a3;
	},

	async f2({a1}) {
		if (1) return;

		this.log(this.fnName, 'do something');
		x ++;
	},

	async f3({a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a2, a3);
		x ++;
	},

	async f4({a2, a3}) {
		if (1) return;

		this.log(this.fnName, 'do something');
		this.log(a2, a3);
		x ++;
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
				x ++;
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
				x ++;
			}
		};

		await kdo.do(flow5b, args);
	},

	async f6() {
		this.log(this.fnName, 'do something');
		x ++;
	},

	async f7() {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// Execute all functions in flow in the original order and
	// pass arguments to all functions via args
	await kdo.do(flow, args);

	// Print with tree indent.
	// Use kdo.log instead of this.log if it is out of the flow,
	// 'cause the "this" is not point to kdo anymore.
	kdo.log('args =', args);

	return x === expect;
};

module.exports = fn;
