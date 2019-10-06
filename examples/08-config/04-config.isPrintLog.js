
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

	// allow kdo to print logs
	kdo.config.set({isPrintLog: true});

	// This equal to the below:
	// kdo.config.setIsPrintLog(true);

	kdo.doSync(flow);

	const state = kdo.config.getIsPrintLog();
	return state === expect;
};

module.exports = fn;
