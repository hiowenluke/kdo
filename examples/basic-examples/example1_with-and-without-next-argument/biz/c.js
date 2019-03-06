
const fn = async ({}, next) => {
	config.log('C do something...');
	await next();
};

module.exports = fn;
