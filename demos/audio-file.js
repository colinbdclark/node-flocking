var fluid = require("infusion"),
    loader = fluid.getLoader(__dirname),
    flock = require(__dirname + "/../index.js");

flock.init({
    rates: {
        audio: 44100
    },

    bufferSize: 128
});

var synth = flock.synth({
    synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            id: "hillier-first-chord",
            url: "demos/audio/hillier-first-chord.wav"
        },
        loop: 1,
        speed: {
            ugen: "flock.ugen.lfNoise",
            freq: 2.5,
            mul: {
                ugen: "flock.ugen.math",
                source: 1,
                div: {
                    ugen: "flock.ugen.bufferDuration",
                    buffer: {
                        id: "hillier-first-chord"
                    }
                }
            },
            add: 1.0,
            options: {
                interpolation: "linear"
            }
        }
    }
});

synth.play();
