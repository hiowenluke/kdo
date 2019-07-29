
const caller = require('caller');
const simulatedModule = require('../simulatedModule');

const kdoDo = require('./do');
const kdoFlow = require('./flow');

const addSimulatedModuleToArgsIfNeeded = (args, caller) => {
	!simulatedModule.isArgFlowExists(args) && simulatedModule.addToArgs(args, caller);
};

const kdo = {
	do(...args) {

		// If the caller did not pass a flow object, then kdo should loads
		// the directory where the caller is located as a flow object.
		addSimulatedModuleToArgsIfNeeded(args, caller());

		return kdoDo(...args);
	},

	flow(...args) {
		addSimulatedModuleToArgsIfNeeded(args, caller());
		return kdoFlow(...args);
	},

	new: require('./new'),
	log: require('./log'),
	nlog: require('./nlog'),
	topic: require('./topic'),
};

module.exports = kdo;
