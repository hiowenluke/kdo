
const caller = require('caller');
const lib = require('../__lib');

const kdoDo = require('./do');
const kdoFlow = require('./flow');

const attachFlowObjectIfNeeded = (args, caller) => {
	!lib.isArgFlowExists(args) && lib.addCallerToArgs(args, caller);
};

const kdo = {
	do(...args) {

		// If the caller did not pass a flow object, then kdo should loads
		// the directory where the caller is located as a flow object.
		attachFlowObjectIfNeeded(args, caller());

		return kdoDo(...args);
	},

	flow(...args) {
		attachFlowObjectIfNeeded(args, caller());
		return kdoFlow(...args);
	},

	new: require('./new'),
	log: require('./log'),
	nlog: require('./nlog'),
	topic: require('./topic'),
};

module.exports = kdo;
