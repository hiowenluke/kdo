
const config = require('../../../__config');

const me = {
	calc() {
		return {a1: 3, a2: 6, a3: 9};
	}
};

module.exports = Object.assign(config, me);
