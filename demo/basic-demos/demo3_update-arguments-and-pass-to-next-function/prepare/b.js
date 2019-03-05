
const fn = ({a1, a2, a3}) => {
	config.log('B do something...');

	// The a2 and a3 has new value
	config.log(a1, a2, a3); // 1, 4, 5
};

module.exports = fn;
