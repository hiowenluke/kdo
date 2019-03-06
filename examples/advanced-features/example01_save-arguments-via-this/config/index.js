
const config = require('../../../__config');

const me = {
	getResult() {
		return {a1: 1, a2: 4, a3: 5};
	}
};

module.exports = Object.assign({}, config, me);
