"use strict";
function runAfter1S(fn, a) {
    setTimeout(() => fn(a), 2000);
}
runAfter1S((a) => { console.log(a); }, 40);
