
// same as b.js except using async / await
const fn = async ({}, next) => {
	if (1) return await next();

	config.log('D do something...');
	await next();
};

module.exports = fn;
