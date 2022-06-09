// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("plotArea",[{x:[5,10,15],y:[3,6,12]}]);


// var trace = [{
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke",
//     "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode:'markers+lines',
//     type: 'scatter'
// }];

// var layout = {
//     title: "Scatter Chart",
//     xaxis:{title:"Drinks"},
//     yaxis:{title:"Percentage"}
    
// };

// Plotly.newPlot("plotArea", trace,layout);

// let words = ['hello','how','are','you']
// let caps = words.map(word => word.toUpperCase())
// console.log(caps)


// let numbers = [1,2,3,4,5]
// let squared = numbers.map(number=>number*number)
// console.log(squared)


// var digits = [3,6,9,12,15];
// var doubled = digits.map(function(digit){
//     return digit*2;

// });
// console.log(doubled);

// var nums = [0,2,4,6,8];
// var addition = nums.map(num=>num+5);
// console.log(addition)

// var addfive = nums.map(function(num){
//     return num+5;
// });
// console.log(addfive);

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// // var citydetails = cities.map(city=>city.City);
// var citydetails = cities.map(function(city){
//     return city.City;
// });

// console.log(citydetails);
// var numbers = [13,44,66,88,3,5,8,22];
// let evenNumbers = numbers.filter(num=>num%2==0);
// console.log(evenNumbers);

// var numbers = [1,2,3,4,5];
// let larger = numbers.map(num=>num>1);
// console.log(larger);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var sStart = words.filter(word=>word.startsWith('s'));
// console.log(sStart);

// var numbers = [2,5,89,33,45,33,55,1,7,3];
// var sorted = numbers.reverse();
// console.log(sorted);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceFun = words.slice(0,3);
console.log(sliceFun);