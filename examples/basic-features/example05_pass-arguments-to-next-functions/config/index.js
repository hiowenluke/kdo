
const config = require('../../../__config');

const me = {
	calc() {
		return this.args;
	}
};

module.exports = Object.assign(config, me);
