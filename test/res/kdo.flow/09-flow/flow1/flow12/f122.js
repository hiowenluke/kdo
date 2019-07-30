
// Do not use the arrow function here, because
// we need to access "this" inside the function.
const fn = async function() {
	this.args.str += this.fnName;
	return 123;
};

module.exports = fn;

