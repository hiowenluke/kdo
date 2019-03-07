
const config = require('../../../__config');

const me = {
	getResult() {
		return this.args;
	}
};

module.exports = Object.assign({}, config, me);
