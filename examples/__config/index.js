
const me = {
	args: {a1: 1, a2: 2, a3: 3},
	isShowLog: true,

	setArgs(...args) {
		const me = this;
		Object.keys(args).forEach(key => {
			me[key] = args[key];
		});
	},

	test() {
		return true;
	},

	log(...args) {
		if (!this.isShowLog) return;
		console.log(...args);
	}
};

global.config = me;
module.exports = me;
