
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a1, a2, a3}) {
	this.str = '';
	this.str += this.fnName;
};

module.exports = fn;

