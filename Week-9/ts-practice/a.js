"use strict";
function runAfter1S(fn) {
    setTimeout(fn, 2000);
}
runAfter1S(() => { console.log("Hello User"); });
