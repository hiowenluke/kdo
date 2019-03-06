
const config = require('../../__config');
const biz = require('./biz');

const fn = async () => {
	await biz();
	config.log('done');
};

module.exports = fn;
