
const kdo = require('my-kdo');

let str = '';

const flow = {
	async f1() {
		str += this.fnName;
	},

	async f2() {
		str += this.fnName;
	},

	async f3() {
		str += this.fnName;
	}
};

const verify = (value) => {
	return value === true;
};

const run = async () => {

	// allow kdo to print logs with tree indent
	kdo.config.set({isPrintTree: true});

	// This equal to the below:
	// kdo.config.setIsPrintTree(true);

	await kdo.do(flow);

	const state = kdo.config.getIsPrintTree();
	return state;
};

const info = {verify, run};
module.exports = info;
