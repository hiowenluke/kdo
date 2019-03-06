
// This function has "next" argument,
// kdo will NOT create a next function automatically
const fn = ({}, next) => {
	config.log('B do something...');
	next();
};

module.exports = fn;
