"use strict";

function trampoline(boundFunc) {
    while (boundFunc && boundFunc instanceof Function) {
        boundFunc = boundFunc();
    }
    return boundFunc;
}

var loopCount = 100000;


function loopit(i) {
    function looper(i) {
        if (i < loopCount) {
            console.log(`${i + 1}/${loopCount}`);
            return looper.bind(null, i+1);
        }
    }
    return trampoline(looper.bind(null, i));
}

loopit(0);

