
// KDO config
const me = {
	isForKdo: false,

	setIsForKdo(val = true) {
		this.isForKdo = val;
	},

	getIsForKdo() {
		return this.isForKdo;
	}
};

module.exports = me;
