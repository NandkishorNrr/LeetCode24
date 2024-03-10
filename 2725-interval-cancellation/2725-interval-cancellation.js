/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancelMs = 0;
var stepMs = 0;

Array.prototype.push = function({returned}) {
  let el = 0;
  for (let i = 0; i < cancelMs; i += stepMs) {
    this[el++] = { time: i, returned };
  }
  return this;
};

setTimeout = function(buildResult, timeout) {
  cancelMs = timeout;
  buildResult();
}

var cancellable = function(fn, args, t) {
  stepMs = t;
  return () => {
    fn(...args);
  };
};
