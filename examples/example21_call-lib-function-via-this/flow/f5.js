
const fn = async function() {
	this.log(this.fnName, 'do something');
};

module.exports = fn;
