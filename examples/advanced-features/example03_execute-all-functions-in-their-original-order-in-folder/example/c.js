
const fn = async function({a1}, next) {
	await this.doSomething(module);
	await next();
};

module.exports = fn;
