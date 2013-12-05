/*global module, setTimeout, clearTimeout */
(function () {
    'use strict';

    function Fire(cntStart) {
        this.id = null;
        this.cnt = this.bgn = typeof cntStart === 'number' && isFinite(cntStart) && cntStart >= 0 ? cntStart : 0;
    }

    Fire.prototype.end = function () {
        clearTimeout(this.id);
        this.id = null;
        this.cnt = this.bgn;
    };

    Fire.prototype.run = function (times, cb, ms) {
        times = typeof times === 'number' && isFinite(times) && times >= 0 ? times : 0;

        var self = this;

        this.id = setTimeout(function () {
            if (self.cnt >= times) {
                self.end();
                return;
            }

            if (typeof cb === 'function') {
                cb(self.cnt, times);
                self.cnt += 1;
                self.run(times, cb, ms);
            } else {
                self.cnt = times;
            }
        }, ms);
    };

    module.exports = Fire;
}());
