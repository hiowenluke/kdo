
const config = require('./config');

const kdo = {
	do: require('./do'),
	dir: require('./dir'),
	new: require('./new'),
	log: require('./log'),
	nlog: require('./nlog'),
	topic: require('./topic'),

	config(...args) {
		return config.set(...args);
	}
};

module.exports = kdo;
