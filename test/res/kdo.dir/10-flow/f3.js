
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {
	this.args.str = '';
	this.args.str += this.fnName;
};

module.exports = fn;
