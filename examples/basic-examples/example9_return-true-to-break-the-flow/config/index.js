
const config = require('../../../__config');

const me = {
	calc() {
		const {a1} = this.args;
		return {a1};
	}
};

module.exports = Object.assign(config, me);
