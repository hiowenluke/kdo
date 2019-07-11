
const kdo = require('../../../lib').config(true, '__lib');

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

const verify = (result) => {
	return result === 'f1f2f3';
};

const run = () => {
	kdo.sync.do(flow);
	return str;
};

const info = {verify, run};
module.exports = info;
