
const fn = () => {
	config.log('B do something...');

	// Return "break" to caller. This will break the flow,
	// and the following "next" functions will not be executed.
	return 'break';
};

module.exports = fn;
