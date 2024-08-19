"use strict";
function isLegal(user) {
    if (user.age > 18)
        return true;
    return false;
}
console.log(isLegal({ name: "Harish", age: 18 }));
