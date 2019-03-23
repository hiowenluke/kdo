
const fn = async function({a1, a2, a3}) {
	this.args.a3 = 6;
	return [this.args.a1, this.args.a2, this.args.a3].join('');
};

module.exports = fn;

