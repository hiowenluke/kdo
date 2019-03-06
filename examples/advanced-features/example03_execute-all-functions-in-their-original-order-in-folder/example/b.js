
const fn = async function({a2, a5}, next) {
	if (1) return await next();

	await this.doSomething(module);
	await next();
};

module.exports = fn;
