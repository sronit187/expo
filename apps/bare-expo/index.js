const setImmediate = require('./immediateShim').setImmediate
const clearImmediate = require('./immediateShim').clearImmediate

global.setImmediate = setImmediate
global.clearImmediate = clearImmediate

import './index.tsx';
