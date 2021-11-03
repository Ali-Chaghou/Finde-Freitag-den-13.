"use strict"


var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
    const element = apples[i];
    let size = element.size;
    console.log(size);
}