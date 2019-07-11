
const kdo = require('../../../lib');

let str = '';

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

const verify = (value) => {
	return value === true;
};

const run = () => {

	// allow kdo to print logs with tree indent
	kdo.config.set({isPrintTree: true});

	// This equal to the below:
	// kdo.config.setIsPrintTree(true);

	kdo.sync.do(flow);

	const state = kdo.config.getIsPrintTree();
	return state;
};

const info = {verify, run};
module.exports = info;
