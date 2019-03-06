
const config = require('../../../__config');

const me = {
	calc() {
		return {a2: 4, a3: 5};
	}
};

module.exports = Object.assign(config, me);
