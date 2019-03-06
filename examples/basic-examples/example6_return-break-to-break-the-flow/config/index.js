
const config = require('../../../__config');

const me = {
	test() {
		return {a1: 1};
	}
};

module.exports = Object.assign(config, me);
