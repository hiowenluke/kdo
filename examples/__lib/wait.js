
const fn = async (ms) => {

	// set timeout to 1ms if it's in test
	ms = global.isTest ? 1 : 1000;

	return new Promise(resolve => {
		// console.log('wait a second...');
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

module.exports = fn;
