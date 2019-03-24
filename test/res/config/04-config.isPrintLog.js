
const kdo = require('../../../lib');

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

	// allow kdo to print logs
	kdo.config.set({isPrintLog: true});

	// This equal to the below:
	// kdo.config.setIsPrintLog(true);

	await kdo.do(flow);

	const state = kdo.config.getIsPrintLog();
	return state;
};

const info = {verify, run};
module.exports = info;
