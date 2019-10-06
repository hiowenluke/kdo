
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = function({a1, a2, a3}) {
	this.args.str += this.wrapFnName(this.fnName);
};

module.exports = fn;
