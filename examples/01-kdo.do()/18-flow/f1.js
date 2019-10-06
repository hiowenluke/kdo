
const fn = async function({a1, a2, a3}) {
	const newValue = this.getNewValue(); // 'abc'
	this.args.a1 = newValue;
};

module.exports = fn;

