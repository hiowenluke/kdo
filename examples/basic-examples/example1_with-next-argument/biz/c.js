
// same as a.js except using async / await
const fn = async ({}, next) => {
	config.log('C do something...');
	await next();
};

module.exports = fn;
