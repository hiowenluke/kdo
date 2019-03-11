
const fn = async (ms) => {

	// set timeout to 1ms if it's in test
	ms = global.isTest ? 1 : (global.waitTime || ms || 1000);

	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

module.exports = fn;
