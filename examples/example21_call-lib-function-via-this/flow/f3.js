
const fn = async function({a2, a3}) {
	this.log(this.fnName, 'do something');
	this.log(a2, a3);
};

module.exports = fn;
