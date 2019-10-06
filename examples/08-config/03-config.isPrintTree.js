
const kdo = require('../../src');

let str = '';
const expect = true;

const flow = {
	f1() {
		str += this.fnName;
	},

	f2() {
		str += this.fnName;
	},

	f3() {
		str += this.fnName;
	}
};

const fn = () => {

	// allow kdo to print logs with tree indent
	kdo.config.set({isPrintTree: true});

	// This equal to the below:
	// kdo.config.setIsPrintTree(true);

	kdo.doSync(flow);

	const state = kdo.config.getIsPrintTree();
	return state === expect;
};

module.exports = fn;
