
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {
	if (1) return;

	this.log(this.fnName, 'do something');
	this.log(a2, a3);
};

module.exports = fn;
