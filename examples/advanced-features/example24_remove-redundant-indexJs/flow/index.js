
const kdo = require('../../../../lib');
const lib = require('../../../../examples/__lib');

kdo.config({isPrintTree: true});
module.exports = kdo.dir(module, {lib});
