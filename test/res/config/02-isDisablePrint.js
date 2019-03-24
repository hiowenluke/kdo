
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
	kdo.config.set({isDisablePrint: true});
	await kdo.do(flow);

	const state = kdo.config.getIsDisablePrint();
	return state;
};

const info = {verify, run};
module.exports = info;
