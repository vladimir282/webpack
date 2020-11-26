async function start() {
    return Promise.resolve("Working")
}
start().then(console.log)

class Util {
    static id = Date.now()
}

const aa = 45;

console.log(Util.id)

import("lodash").then(_ => {
    console.log("Lodash", _.default.random(0, 45, true))
});