// Day 07:ARRAY METHODS


// Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
// Get all the countries from the Asia continent /region using the Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag using forEach function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.


//============= #1 Get all the countries from the Asia continent /region using the Filter function ======================

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true);
request.send();
let countryCode = "Asia"
request.onload = function(){
var countries = JSON.parse(request.response);
 const result = countries.filter(countries => countries.region===countryCode)
console.log(`${result.length} countries are from the Asia continent /region` , result);
}

//============= #2 Get all the countries with a population of less than 2 lakhs using Filter function ======================


// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/all', true);
// request.send();
// request.onload = function () {
//     var information = JSON.parse(request.response);
//     const result = information.filter((data) => {
//         return data.population < 200000;
//     })
//     console.log(`${result.length} countries are less than 2 lakhs population` , result);
// }




//============= #3 Print the following details name, capital, flag using forEach function ======================

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//     var information = JSON.parse(request.response);
//     information.forEach((information) => {
//         console.log(`Country name: ${information.name}, Capital: ${information.capital}, flag: ${information.flag}`);
//     })
// }

//===================== #4 Print the total population of countries using reduce function================================

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/all', true);
// request.send();
// request.onload = function () {
//     var data = JSON.parse(request.response);
//     const totalPopulation = data.reduce((acc, curr) => {
//         return acc + curr.population;
//     }, 0)
//     console.log(`The total number of the population of countries are ${totalPopulation}`);
// }

//========================= #5 Print the country which uses US Dollars as currency. =====================================

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/all', true);
// request.send();
// request.onload = function () {
//     var data = JSON.parse(request.response);
//     let result = data.filter((dummy) => (dummy.currencies !== undefined))
//     let totalUsd = result.filter((data) => {
//         for (let key in data.currencies) {
//             if (data.currencies[key].name === "United States dollar") {
//                 return data
//             }
//         }
//     })
//     console.log(totalUsd.length, totalUsd)
// }

//===========================================END=========================================
