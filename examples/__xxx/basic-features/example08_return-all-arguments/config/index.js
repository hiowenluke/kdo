
const config = require('../../../__config');

const me = {
	getResult() {
		return {a1: 3, a2: 6, a3: 9};
	}
};

module.exports = Object.assign({}, config, me);
