
const fn = async ({a1}, next) => {
	config.log('C do something...');
	await next();
};

module.exports = fn;
