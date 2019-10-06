
// Pass two arguments when require kdo if needed:
// 		1. A boolean argument that represents isDisablePrint (Optional)
// 		2. A string argument that represents libDirName (Optional)
//		3. No order requirement
const kdo = require('../../src');

// This equal to:
// 		kdo.config.set({isDisablePrint: true, libDirName: '__lib'});
kdo.config(true, '__lib');

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
	kdo.doSync(flow);

	const isPrintLog = kdo.config.getIsPrintLog();
	const libDirName = kdo.config.getLibDirName();

	const state = isPrintLog === true && libDirName === '__lib';
	return state === expect;
};

module.exports = fn;
