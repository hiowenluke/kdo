
const fn = async function({a1, a2, a3}, next) {
	await this.doSomething(module);
	await next();
};

module.exports = fn;
