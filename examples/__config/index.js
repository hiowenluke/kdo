
const me = {
	args: {a1: 1, a2: 2, a3: 3},
	isTest: false,

	getIsTest() {
		return this.isTest;
	},

	getArgs() {
		return this.args;
	},

	setArgs(...args) {
		const me = this;
		Object.keys(args).forEach(key => {
			me[key] = args[key];
		});
	},

	calc() {
		return true;
	},

	log(...args) {
		if (this.isTest) return;
		console.log(...args);
	}
};

module.exports = me;
