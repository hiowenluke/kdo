
const kdo = require('../../../lib');

// Pass two arguments when require kdo if needed:
// 		1. A boolean argument that represents isDisablePrint (Optional)
// 		2. A string argument that represents libDirName (Optional)
//		3. No order requirement
kdo.config(true, '__lib');

// This equal to the blow:
// kdo.config.set({isDisablePrint: true, libDirName: '__lib'});

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

const verify = (state) => {
	return state.isPrintLog === true && state.libDirName === '__lib';
};

const run = async () => {
	await kdo.do(flow);

	const isPrintLog = kdo.config.getIsPrintLog();
	const libDirName = kdo.config.getLibDirName();

	return {isPrintLog, libDirName};
};

const info = {verify, run};
module.exports = info;
