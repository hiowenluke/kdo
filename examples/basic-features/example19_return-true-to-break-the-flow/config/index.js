
const config = require('../../../__config');

const me = {
	calc() {
		return {a1: 1};
	}
};

module.exports = Object.assign(config, me);
