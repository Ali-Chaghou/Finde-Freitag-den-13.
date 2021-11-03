"use strict"


let months_Array = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
let year;
let month;

let output = document.querySelector('#output');

for (year = 2015; year <= 2022; year++) {
    output.innerHTML += "<h2> Wir schreiben das Jahr: " + year + "</h2>"
    let content = "<ul>"
    for (month = 0; month < 11; month++) {
        const thirteen = new Date(year, month, 13);
        if (thirteen.getDay() == 5) {
            content += '<li>Friday 13th ' + months_Array[month] + ' ' + year + "</li>";
        }
    }
    content += "</ul>" + "<br>"
    output.innerHTML += content;

}