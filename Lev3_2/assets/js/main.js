"use stric"

let output = document.querySelector('#output');
let numArr = [5, 22, 15, 100, 55];
let lengthArr = numArr.length;


//Die schleife wird 5 mal ausgeführt 
for (let i = 0; i < lengthArr; i++) {
    for (let a = 2; a < numArr[i]; a++) {
        let rest = numArr[i] % a;
        if (rest == 0) {
            output.innerHTML += numArr[i] + ' ist teilbar durch ' + a + '! Das Ergebnis ist: ' + (numArr[i] / a) + '<br>';
        }
    }
}