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

//variable for for
let months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
let year;
let month;

//createElement for 2015
const fifteen2015 = () => {
    for (year = 2015; year <= 2015; year++) {
        for (month = 0; month < 11; month++) {
            const thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                const li = document.createElement('li');
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                fifteen.append(li);
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
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                sixteen.append(li);
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
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                seventeen.append(li);
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
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                eighteen.append(li);
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
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                nineteen.append(li);
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
                li.innerText = 'Friday 13th ' + months[month] + ' ' + year;
                twenty.append(li);
                console.log(li.innerText);
            }
        }
    }
}
twenty2020();

console.log('------------- Das war 2020 ----------------')
console.log('-------------------------------------------')