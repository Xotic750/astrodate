/*global module, setTimeout, clearTimeout */
(function () {
    'use strict';
    function setValid(x) {
        return typeof x === 'number' && isFinite(x) && x >= 0 ? x : 0;
    }

    function Fire(cntStart) {
        this.id = null;
        this.cnt = this.bgn = setValid(cntStart);
    }

    Fire.prototype.end = function (cb) {
        clearTimeout(this.id);
        this.id = null;
        this.cnt = this.bgn = setValid(this.bgn);
        if (typeof cb === 'function') {
            cb();
        }
    };

    Fire.prototype.run = function (times, fn, ms, cb) {
        var self;

        times = setValid(times);
        if (typeof this.cnt === 'number' && this.cnt < times) {
            self = this;
            this.id = setTimeout(function () {
                if (typeof fn === 'function') {
                    fn(self.cnt, times);
                    self.cnt += 1;
                    self.run(times, fn, ms, cb);
                } else {
                    self.cnt = times;
                }
            }, ms);
        } else {
            this.end(cb);
        }
    };

    module.exports = Fire;
}());
