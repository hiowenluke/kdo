
const config = require('./config');
const dir = require('./dir');
const new_ = require('./new');
const log = require('./log');
const nlog = require('./nlog');
const require_ = require('./require');
const topic = require('./topic');
const do_ = require('./do');

const kdo = do_;
kdo.new = new_;
kdo.nlog = nlog;
kdo.log = log;
kdo.require = require_;
kdo.topic = topic;
kdo.dir = dir;

kdo.config = (cfg) => {
	config.set(cfg);
};

module.exports = kdo;
