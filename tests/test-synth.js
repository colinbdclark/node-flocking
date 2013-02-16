var fluid = require("infusion"),
    flock = fluid.registerNamespace("flock");

fluid.registerNamespace("flock.demo");

flock.demo.nodeTest = function () {
    flock.init({
        bufferSize: 64,
        latency: 1
    });
        
    /*
     * Multiple synths playing back simultaneously, playing shifting chords.
     */

    // Creates an array of synths, each playing a degree of the chord specified in "intervals."
    function makeIntervallicSynths (fundamental, intervals) {
        var ampScale = 0.4 / intervals.length;
        return fluid.transform(intervals, function (interval, idx) {
            return flock.synth({
                id: "carrier",
                ugen: "flock.ugen.sin",
                freq: fundamental * interval,
                mul: ampScale
            });
        });
    }

    var fundamental = 440,
        baseIntervals = [1/1, 5/4, 3/2],
        weightedIntervals = baseIntervals.concat([4/3, 6/5, 7/6, 2/1]).concat(baseIntervals),
        synths = makeIntervallicSynths(fundamental, baseIntervals),
        synth = synths[0],
        clock = flock.scheduler.async.beat(60);

    // Every second, change one of the intervals by randomly choosing a synth
    // and assigning it a new frequency from the list of intervals.
    clock.repeat(1/16, function () {
        var intervalSynth = flock.choose(synths),
            newInterval = flock.choose(weightedIntervals)
            newFreq = fundamental * newInterval;
        fluid.log(newFreq);
        intervalSynth.input("carrier.freq", newFreq);
    });
 
    return synth;
};
