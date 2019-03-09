
const default_ = {
	args: {a1: 1, a2: 2, a3: 3}
};

const me = {
	args: {},

	init() {
		Object.assign(this.args, default_.args);
		return this.args;
	},

	setArgs(...args) {
		const This = this;
		Object.keys(args).forEach(key => {
			This[key] = args[key];
		});
	},

	getResult() {
		return true;
	}
};

module.exports = me;
