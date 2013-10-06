var fluid = require("infusion"),
    loader = fluid.getLoader(__dirname);

loader.require("./flocking/flocking/flocking-core.js");
loader.require("./flocking/flocking/flocking-scheduler.js");
loader.require("./flocking-node.js");
loader.require("./flocking/flocking/flocking-parser.js");
loader.require("./flocking/flocking/flocking-ugens.js");

loader.require("./tests/test-synth.js")

var flock = fluid.registerNamespace("flock");

flock.init({
    bufferSize: 128,
    rates: {
        audio: 22050
    }
});

var synth = flock.demo.nodeTest();
synth.play();
console.log("Playing...");
