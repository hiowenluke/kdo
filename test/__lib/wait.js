
const fn = async (ms = 1) => {

	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

module.exports = fn;
