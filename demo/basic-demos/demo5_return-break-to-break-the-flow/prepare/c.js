
// This function will not be executed because it was skipped
const fn = ({a1}) => {
	config.log('C do something...');

	a1 = 6;

	return {args: {a1}};
};

module.exports = fn;
