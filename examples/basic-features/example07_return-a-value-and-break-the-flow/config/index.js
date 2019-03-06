
const config = require('../../../__config');

const me = {
	getResult() {
		const {a1, a2} = this.args;
		return a1 + a2;
	}
};

module.exports = Object.assign(config, me);
