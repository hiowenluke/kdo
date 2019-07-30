
// Pass two arguments when require kdo if needed:
// 		1. A boolean argument that represents isDisablePrint (Optional)
// 		2. A string argument that represents libDirName (Optional)
//		3. No order requirement
const kdo = require('../../../src');
kdo.config(true, '__lib');

// This equal to:
// 		kdo.config.set({isDisablePrint: true, libDirName: '__lib'});

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

const verify = (state) => {
	return state.isPrintLog === true && state.libDirName === '__lib';
};

const run = () => {
	kdo.sync.do(flow);

	const isPrintLog = kdo.config.getIsPrintLog();
	const libDirName = kdo.config.getLibDirName();

	return {isPrintLog, libDirName};
};

const info = {verify, run};
module.exports = info;
