
const config = require('../../__config');
const prepare = require('./prepare');

const fn = async () => {
	await prepare();
	config.log('done');
};

module.exports = fn;
