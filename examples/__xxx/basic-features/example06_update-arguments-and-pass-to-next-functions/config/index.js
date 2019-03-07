
const config = require('../../../__config');

const me = {
	getResult() {
		return {a1: 6, a2: 7, a3: 5};
	}
};

module.exports = Object.assign({}, config, me);
