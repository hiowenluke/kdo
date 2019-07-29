
const kdo = require('../../lib');

// ----------------------------------------------------
// By organizing functions using objects such as "flow" or "me",
// we can break down the complex logic into multiple small functions,
// making the code structure clear, easy to understand and maintain.
// ----------------------------------------------------

// We can use sync function only if all functions in flow are sync.

// ----------------------------------------------------
// NOTE:
// 1. If there is at least one async function in flow,
//    all functions must be asynchronous.

// 2. The kdo must be called with await, so we can not nest
//    call kdo in sync flow (all functions in flow are sync).
// ----------------------------------------------------

const flow = {
	f1({a1, a2, a3}) {

		// The this.fnName is name of the current function,
		// for example, it's "f1" in this case
		this.log(this.fnName, 'do something');

		// The this.log is a built-in function of kdo.
		// It prints logs with indent, and same usage as console.log().
		this.log(a1, a2, a3);

		// The kdo will automatically go to the next function, cool!
	},

	f2({a1, a2, a3}) {

		// If the condition is not met, then return
		// The kdo will automatically go to the next function, cool!
		if (1) return;

		// The subsequent code will be ignored.
		this.log(this.fnName, 'do something');
		this.log(a1, a2, a3);
	},

	f3({a2, a3}) {
		this.log(this.fnName, 'do something');
		this.log(a2, a3);
	},

	f4({a2, a3}) {
		if (1) return;

		this.log(this.fnName, 'do something');
		this.log(a2, a3);
	},

	f5(args) {
		this.log(this.fnName, 'do something');
	},

	f6() {
		this.log(this.fnName, 'do something');
	},

	f7() {
		this.log(this.fnName, 'do something');
	}
};

const fn = async () => {

	const args = {a1: 1, a2: 2, a3: 3};

	// Execute all functions in flow in the original order and
	// pass arguments to all functions via args
	const result = await kdo.do(flow, args);

	// Use kdo.log instead ofthis.log if it is out of the flow,
	// 'cause the "this" is not point to kdo anymore.
	kdo.log('args =', args);

	return result;
};

module.exports = fn;
