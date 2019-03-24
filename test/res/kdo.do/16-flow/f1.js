
const fn = async function({a1, a2, a3}) {
	this.args.a1 = 4;
};

module.exports = fn;

