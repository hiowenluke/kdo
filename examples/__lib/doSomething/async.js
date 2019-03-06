
const do_ = require('./do');
const wait = require('../wait');

const fn = async (module) => {
	do_(module);
	await wait();
};

module.exports = fn;
