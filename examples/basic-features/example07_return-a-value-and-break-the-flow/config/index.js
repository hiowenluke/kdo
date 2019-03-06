
const config = require('../../../__config');

const me = {
	calc() {
		const {a1, a2} = this.args;
		const result = a1 + a2;

		this.log('calc:', 'a1 + a2 =', result);
		return result;
	}
};

module.exports = Object.assign(config, me);
