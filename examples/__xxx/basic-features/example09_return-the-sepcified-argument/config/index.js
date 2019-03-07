
const config = require('../../../__config');

const me = {
	getResult() {
		return 6;
	}
};

module.exports = Object.assign({}, config, me);
