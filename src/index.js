
const caller = require('caller');
const config = require('./__config');
const async = require('./async');
const sync = require('./sync');

const kdo = (...args) => {
	return async.obj(...args, caller());
};

// The default is async
Object.assign(kdo, async);

// Attach sync edition
kdo.sync = sync;

// Attach config
kdo.config = config;

// Alias
kdo.doSync = kdo.sync.do;
kdo.flowSync = kdo.sync.flow;
kdo.dirFn = kdo.flow;

module.exports = kdo;
