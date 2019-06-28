
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

	// disable kdo printing any info (including logs via this.log())
	kdo.config.set({isDisablePrint: true});

	// This equal to the below:
	// kdo.config.setIsDisablePrint(true);

	await kdo.do(flow);

	const state = kdo.config.getIsDisablePrint();
	return state;
};

const info = {verify, run};
module.exports = info;
