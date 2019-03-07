
const fn = async function({}, next) {
	await this.doSomething(module);
	await next();
};

module.exports = fn;
