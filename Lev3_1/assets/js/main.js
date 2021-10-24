// let date = new Date();
// console.log(date.toTimeString());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date.toString());
// console.log(date.toLocaleDateString('en-US'))

//HTML parent element ul from li
let fifteen = document.querySelector('#fifteen');
let sixteen = document.querySelector('#sixteen');
let seventeen = document.querySelector('#seventeen');
let eighteen = document.querySelector('#eighteen');
let nineteen = document.querySelector('#nineteen');
let twenty = document.querySelector('#twenty');
let twentyOne = document.querySelector('#twentyOne');
let twentyTwo = document.querySelector('#twentyTwo');

//variable for for
let months_Array = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
let year;
let month;

//createElement for 2015
const fifteen2015 = () => {
    for (year = 2015; year <= 2015; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                fifteen.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
fifteen2015();
console.log('------------- Das war 2015 ----------------')
console.log('-------------------------------------------')

//createElement for 2016
const sixteen2016 = () => {
    for (year = 2016; year <= 2016; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                sixteen.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
sixteen2016();
console.log('------------ Das war 2016 -----------------')
console.log('-------------------------------------------')

//createElement for 2017
const seventeen2017 = () => {
    for (year = 2017; year <= 2017; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                seventeen.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
seventeen2017();
console.log('------------- Das war 2017 ----------------')
console.log('-------------------------------------------')

//createElement for 2018
const eighteen2018 = () => {
    for (year = 2018; year <= 2018; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                eighteen.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
eighteen2018();
console.log('------------- Das war 2018 ----------------')
console.log('-------------------------------------------')

//createElement for 2019
const nineteen2019 = () => {
    for (year = 2019; year <= 2019; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                nineteen.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
nineteen2019();
console.log('------------- Das war 2019 ----------------')
console.log('-------------------------------------------')

//createElement for 2020
const twenty2020 = () => {
    for (year = 2020; year <= 2020; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                twenty.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
twenty2020();

console.log('------------- Das war 2020 ----------------')
console.log('-------------------------------------------')

//createElement for 2021
const twenty2021 = () => {
    for (year = 2021; year <= 2021; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                twentyOne.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
twenty2021();

console.log('------------- Das war 2021 ----------------')
console.log('-------------------------------------------')

//createElement for 2022
const twenty2022 = () => {
    for (year = 2022; year <= 2022; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months_Array[month] + ' ' + year;
                twentyTwo.appendChild(li);
                console.log(li.innerText);
            }
        }
    }
}
twenty2022();

console.log('------------- Das war 2022 ----------------')
console.log('-------------------------------------------')