"use strict"

// define elements
let form = document.querySelector("form");
let maxNum = document.querySelector(".max-num");
let firstNum = document.querySelector(".first-num");
let secNum = document.querySelector(".second-num");
let btn = document.querySelector(".button");
let output = document.querySelector(".output");
let outputSum = document.querySelector(".output-summe");
let addArray = [];
console.log(addArray);

// define function
function calc(e) {
    e.preventDefault();

    // read maxNum
    let maxNumValue = maxNum.value;
    console.log(maxNumValue);

    // read NumValues
    let firstNumValue = firstNum.value;
    console.log(firstNumValue);
    let secNumValue = secNum.value;
    console.log(secNumValue);

    if (maxNumValue == "" && firstNumValue == secNumValue) {
        output.innerHTML =
            "Bitte eine maximale Zahl eingeben und zwei verschiedene Zahlen auswählen.";
    } else if (firstNumValue == secNumValue) {
        output.innerHTML = "Bitte zwei verschiedene Zahlen auswählen";
    } else if (maxNumValue == "") {
        output.innerHTML = "Bitte eine maximale Zahl auswählen";
    } else {
        subCalc(firstNumValue);
        subCalc(secNumValue);

        function subCalc(numValue) {
            for (let i = 1; i <= maxNumValue; i++) {
                let erg = i % numValue;
                if (erg == 0) {
                    addArray.push(i);
                }
            }
        }
        output.innerHTML = "Ermittelte Zahlen: " + addArray.join(" + ");
        outputSum.innerHTML = "Summe: " + eval(addArray.join(" + "));

        console.log(addArray.join(" + "));
        console.log(eval(addArray.join(" + ")));
        btn.disabled = true;
    }
}

btn.addEventListener("click", calc);

// reset game
let reset = document.querySelector(".reset");

function resetGame() {
    window.location.reload();
}

reset.addEventListener("click", resetGame);