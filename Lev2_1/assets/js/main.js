"use strict"


const image = ['image_'];
const jpg = ['.jpg'];

for (let i = 0; i <= 100; i++) {
    let count = image + i + jpg;
    if (i <= 9) {
        count = image + '00' + i + jpg;
    } else if ((i <= 99)) {
        count = image + '0' + i + jpg;
    }
    console.log(count);
}