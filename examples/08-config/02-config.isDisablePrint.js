
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

	// disable kdo printing any info (including logs via this.log())
	kdo.config.set({isDisablePrint: true});

	// This equal to the below:
	// kdo.config.setIsDisablePrint(true);

	kdo.doSync(flow);

	const state = kdo.config.getIsDisablePrint();
	return state === expect;
};

module.exports = fn;
