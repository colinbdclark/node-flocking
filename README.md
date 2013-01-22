What is Flocking and node-flocking?
===================================

**node-flocking** is a Node.js module for [Flocking](http://flockingjs.org). It's a very early work in progress, but it has been tested on both Mac OS X and on Debian Linux running on a Raspberry Pi.

**Flocking** is an audio synthesis toolkit for JavaScript. It runs in a browser (Firefox, Chrome, or Safari) or directly on your computer (using Node.js). It doesn't require Flash or any other proprietary plugins. Written entirely in JavaScript, Flocking is designed for artists and musicians building creative Web-based sound projects.

Flocking was inspired by the [SuperCollider](http://supercollider.sourceforge.net/) desktop synthesis 
environment. If you're familiar with SuperCollider, you'll feel at home with Flocking.
    
Unlike comparable synthesis libraries, Flocking is declarative. Unit generators are wired together using a 
simple JSON-based syntax, making it easy to save and share your synthesis algorithms in plain text.
Send your synths via Ajax, save them for later using HTML5 local data storage, or parse them into formats compatible with 
other synthesis engines. In the future, this JSON-based format will also enable better authoring tools and 
synthesis environments to be built on top of Flocking.


How Do I Run It?
================

Flocking in Node.js is still very raw, so the installation process is rather awkward. There are two ways to get it up and running; this process will be significantly simplified as the codebase stabilizes.

### By hand:
1. Build [cubeb](https://github.com/kinetiknz/cubeb)
2. Clone node-flocking
3. Clone [flocking](https://github.com/colinbdclark/Flocking) into node-flocking: "git clone git://github.com/colinbdclark/Flocking.git flocking"
4. Check out the infusion branch of flocking: "git checkout infusion" 
5. Install node module dependencies: "npm install cubeb dsp"
6. Test it with "node index.js"

### With npm:
1. Build [cubeb](https://github.com/kinetiknz/cubeb)
2. Install node-flocking via npm from the repo: "npm install git://github.com/colinbdclark/node-flocking.git"
3. Clone [flocking](https://github.com/colinbdclark/Flocking) into node_modules/node-flocking: "git clone git://github.com/colinbdclark/Flocking.git flocking"
4. Check out the infusion branch of flocking "git checkout infusion"
5. Test it with "node index.js"
