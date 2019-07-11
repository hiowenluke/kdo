
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

	// disable kdo printing any info (including logs via this.log())
	kdo.config.set({isDisablePrint: true});

	// This equal to the below:
	// kdo.config.setIsDisablePrint(true);

	kdo.sync.do(flow);

	const state = kdo.config.getIsDisablePrint();
	return state;
};

const info = {verify, run};
module.exports = info;
