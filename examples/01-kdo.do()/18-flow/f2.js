
const fn = async function({a1, a2, a3}) {
	this.args.a2 = 5;
};

module.exports = fn;

