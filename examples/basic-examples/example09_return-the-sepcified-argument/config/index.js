
const config = require('../../../__config');

const me = {
	calc() {
		return 6;
	}
};

module.exports = Object.assign(config, me);
