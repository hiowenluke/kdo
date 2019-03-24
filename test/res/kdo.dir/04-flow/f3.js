
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function({a2, a3}) {

	// call lib functions via this
	await this.wait();

	this.str = '';
	this.str += this.fnName;
};

module.exports = fn;